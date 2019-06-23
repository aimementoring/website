import React, { Component } from 'react';
import Select, { Option } from 'rc-select';
import Table from 'rc-table';
import * as JsSearch from 'js-search';
import { Components } from 'aime-blueprint';
import { loadProgramDays, saveProgramDayAttendance, getProgramDay } from '../../services/programDays';
import { loadTutorSquads, getTutorSquad, saveTutorSquadAttendance } from '../../services/tutorSquads';
import { loadEvents, getEvent, saveEventAttendance } from '../../services/events';
import { loadProgramSites } from '../../services/programSites';
import { loadSchoolAttendes } from '../../services/schools';
import { loadMentees } from '../../services/mentees';
import { loadMentors } from '../../services/mentors';
import { loadContacts } from '../../services/contacts';
import { setOnStorage, getFromStorage } from '../../utils/localStorage';
import { login, logout, isLogged } from '../../services/auth';
import { AUTH0_STAFF_CONFIG } from '../../constants';
import './index.scss';

const { Loading } = Components;

/* eslint-disable no-alert */
export default class Attendance extends Component {
  state = {
    programSites: [],
    filteredProgramSites: [],
    selectedProgramSite: null,
    programDays: [],
    tutorSquads: [],
    events: [],
    selectedMeetingID: null,
    schoolAttendees: [],
    selectedPeople: [],
    peopleList: [],
    filteredInfo: null,
    loading: false,
    token: false,
    meetingType: null,
    assistanceType: null,
    userIsLogged: false,
  }

  componentDidMount() {
    const sites = getFromStorage('program_sites');
    if (!sites) {
      this.setState({ loading: true });
      loadProgramSites(null, ['reporting_name', 'name'])
        .then(programSites => {
          const sortedSites = programSites.sort((a, b) => {
            return a.reporting_name < b.reporting_name ? -1 : (a.reporting_name > b.reporting_name ? 1 : 0);
          });
          setOnStorage('program_sites', sortedSites);
          this.setState({
            programSites: sortedSites,
            loading: false,
          });
        });
    } else {
      this.setState({ programSites: sites });
    }
    if (isLogged()) {
      this.setLogin();
    } else {
      // TODO: Make process.env.AUTH0_STAFF_CLIENT_ID work
      this.login();
    }
  }

  getInitials = name => {
    const names = name.trim().split('(')[0].split(' ');
    return (names.length > 1 ? `${names[0][0]}${names.slice(-1)[0][0]}` : `${names[0][0]}${names[0][1]}`).toUpperCase();
  }

  getSchoolName = schoolId => {
    const { schoolAttendees } = this.state;
    const schoolObj = schoolAttendees.find(school => school.id === schoolId);
    return schoolObj ? schoolObj.name : '';
  }

  getFilteredList = list => {
    const { filteredInfo } = this.state;
    let results = list;

    if (filteredInfo) {
      results = results.filter(person => {
        return (
          filteredInfo.school && filteredInfo.school.length > 0
            ? filteredInfo.school.filter(school => person.school && person.school.length > 0 && person.school.indexOf(school) > -1).length > 0
            : true
        ) && (
          filteredInfo.year_level && filteredInfo.year_level.length > 0
            ? filteredInfo.year_level.filter(level => person.year_level && person.year_level.length > 0 && person.year_level.indexOf(level) > -1).length > 0
            : true
        ) && (
          filteredInfo.gender && filteredInfo.gender.length > 0
            ? filteredInfo.gender.filter(level => person.gender && person.gender.length > 0 && person.gender.indexOf(level) > -1).length > 0
            : true
        ) && (
          filteredInfo.contact_type && filteredInfo.contact_type.length > 0
            ? filteredInfo.contact_type.filter(level => person.contact_type && person.contact_type.length > 0 && person.contact_type.indexOf(level) > -1).length > 0
            : true
        ) && (
          filteredInfo.position && filteredInfo.position.length > 0
            ? filteredInfo.position.filter(level => person.position && person.position.length > 0 && person.position.indexOf(level) > -1).length > 0
            : true
        );
      });

      if (filteredInfo.query) {
        const search = new JsSearch.Search('id');
        search.addIndex('gender');
        search.addIndex('school');
        search.addIndex('age');
        search.addIndex('name');
        search.addIndex('contact_type');
        search.addIndex('position');
        search.addDocuments(results);
        results = search.search(filteredInfo.query);
      }
    }
    return results;
  }

  setLogin = () => {
    this.setState({ userIsLogged: true });
  }

  login = () => {
    login(this.setLogin, process.env.REACT_APP_AUTH0_API_ID_STAFF, AUTH0_STAFF_CONFIG);
  }

  logout = () => {
    logout();
    this.setState({ userIsLogged: false });
  }

  handleProgramSiteChange = programSiteReportedName => {
    const { meetingType, assistanceType, programSites } = this.state;
    const attributes = [];
    const selectedProgramSite = programSites.find(site => site.reporting_name === programSiteReportedName).name;

    this.setState({ loading: true });
    if (assistanceType === 'mentees') {
      attributes.push('mentee_attendance');
    } else if (assistanceType === 'mentors') {
      attributes.push('mentor_attendance');
    } else { // contacts
      attributes.push('contact_attendance');
    }

    if (meetingType === 'program') {
      attributes.push('name', 'attending_schools', 'year_level');
      if (assistanceType === 'mentees') {
        attributes.push('mentee_missed_attendance');
      } else if (assistanceType === 'mentors') {
        attributes.push('mentors_missed_attendance');
      }
      loadProgramDays(`{Program Site}='${selectedProgramSite}'`, attributes)
        .then(programDays => {
          this.setState({
            selectedProgramSite,
            programDays,
            loading: false,
          });
        });
    } else if (meetingType === 'tutor') {
      attributes.push('name', 'schools', 'year_level');
      loadTutorSquads(`{Program Site}='${selectedProgramSite}'`, attributes)
        .then(tutorSquads => {
          this.setState({
            selectedProgramSite,
            tutorSquads,
            loading: false,
          });
        });
    } else { // event
      attributes.push('name');
      loadEvents(`{Program Site Involved}='${selectedProgramSite}'`, attributes)
        .then(events => {
          this.setState({
            selectedProgramSite,
            events,
            loading: false,
          });
        });
    }
  }

  updateStudentsMentorsAndContacts = (dayId, list, enrolmentType = null) => {
    const { assistanceType, selectedProgramSite } = this.state;
    const dayObject = list.find(day => day.id === dayId);

    if (dayObject) {
      if (assistanceType === 'mentees') {
        if (enrolmentType) {
          if (dayObject.schools) {
            this.setState({ loading: true });
            const schoolsFilter = dayObject.schools
              .map(school => `RECORD_ID()='${school}'`)
              .join(',');

            loadSchoolAttendes(`OR(${schoolsFilter})`, ['name', 'mentees'])
              .then(schoolAttendees => {
                const menteesFilter = schoolAttendees
                  .map(school => school.mentees || [])
                  .reduce((key, id) => (key.concat(id)), []) // Flatmap from list of mentees.
                  .map(student => `RECORD_ID()='${student}'`)
                  .join(',');

                loadMentees(`OR(${menteesFilter})`, ['name', 'photo', 'school', 'gender', 'age', 'year_level'])
                  .then(studentsList => {
                    const students = dayObject.year_level && dayObject.year_level.length > 0
                      ? studentsList.filter(student => student.year_level && student.year_level.some(level => dayObject.year_level.indexOf(level) > -1))
                      : studentsList;

                    this.setState({
                      selectedMeetingID: dayId,
                      peopleList: students,
                      selectedPeople: dayObject.mentee_attendance || [],
                      schoolAttendees: schoolAttendees.map(school => {
                        school.mentees = school.mentees
                          ? school.mentees.map(mentee => {
                            return students.find(student => mentee === student.id);
                          })
                          : null;
                        return school;
                      }),
                      loading: false,
                    });
                  });
              });
          }
        } else {
          this.setState({ loading: true });
          loadMentees(`{Program Site}='${selectedProgramSite}'`, ['name', 'photo', 'school', 'gender', 'age', 'year_level'])
            .then(peopleList => {
              this.setState({
                selectedMeetingID: dayId,
                peopleList,
                selectedPeople: dayObject.mentee_attendance || [],
                loading: false,
              });
            });
        }
      } else if (assistanceType === 'mentors') {
        this.setState({ loading: true });
        let mentorFilters = `{Program Site}='${selectedProgramSite}'`;
        if (enrolmentType) {
          mentorFilters = `AND({Program Site}='${selectedProgramSite}',{Enrolment Status}='Enrolled',{Enrolment Type}='${enrolmentType}')`;
        }
        loadMentors(mentorFilters, ['name', 'photo', 'gender', 'age'])
          .then(peopleList => {
            this.setState({
              selectedMeetingID: dayId,
              peopleList,
              selectedPeople: dayObject.mentor_attendance || [],
              loading: false,
            });
          });
      } else { // contacts
        this.setState({ loading: true });
        loadContacts(`{Program Site}='${selectedProgramSite}'`, ['name', 'photo', 'contact_type', 'position', 'gender', 'age'])
          .then(peopleList => {
            this.setState({
              selectedMeetingID: dayId,
              peopleList,
              selectedPeople: dayObject.contact_attendance || [],
              loading: false,
            });
          });
      }
    }
  }

  handleProgramDayChange = programDayID => {
    const { programDays } = this.state;
    this.updateStudentsMentorsAndContacts(programDayID, programDays, 'University Program');
  }

  handleTutorSquadChange = tutorSquadID => {
    const { tutorSquads } = this.state;
    this.updateStudentsMentorsAndContacts(tutorSquadID, tutorSquads, 'Tutor Squad');
  }

  handleEventsChange = eventID => {
    const { events } = this.state;
    this.updateStudentsMentorsAndContacts(eventID, events);
  }

  handleMeetingTypeChange = meetingType => {
    this.setState({ meetingType });
  }

  handleAssistanceTypeChange = assistanceType => {
    this.setState({ assistanceType });
  }

  handleAttendeesChange = selectedPeople => {
    this.setState({ selectedPeople });
  }

  handleAssistChange = (value, person) => {
    const { selectedPeople } = this.state;

    if (value) {
      selectedPeople.unshift(person);
      this.setState({ selectedPeople });
    } else {
      this.setState({ selectedPeople: selectedPeople.filter(selected => selected !== person) });
    }
  }

  handleSubmit = filteredList => {
    const { selectedMeetingID, selectedPeople, meetingType, assistanceType } = this.state;
    this.setState({ loading: true });

    let attended = [];
    let missedAttendance = [];
    let getAttribute;
    let saveAttribute;

    if (meetingType === 'program') {
      getProgramDay(selectedMeetingID)
        .then(meeting => {
          if (assistanceType === 'mentees') {
            getAttribute = 'mentee_attendance';
            saveAttribute = 'Mentees Attended';
            missedAttendance = meeting.mentee_missed_attendance || [];
          } else if (assistanceType === 'mentors') {
            getAttribute = 'mentor_attendance';
            saveAttribute = 'Mentors Attended';
          } else {
            getAttribute = 'contact_attendance';
            saveAttribute = 'Other Attendance';
          }
          attended = meeting[getAttribute] || [];

          selectedPeople.forEach(mentee => {
            if (mentee && filteredList.find(person => person.id === mentee) && attended.indexOf(mentee) === -1) attended.unshift(mentee);
          });
          filteredList.filter(person => selectedPeople.indexOf(person.id) === -1).forEach(person => {
            if (missedAttendance.indexOf(person.id) === -1) missedAttendance.unshift(person.id);
          });

          const payload = { [saveAttribute]: attended };
          if (assistanceType === 'mentees') {
            payload['Mentees missed Attendance'] = missedAttendance;
          }

          saveProgramDayAttendance(selectedMeetingID, payload).then(() => {
            this.setState({ loading: false });
            alert('Attendance has been successfully saved');
          });
        });
    } else if (meetingType === 'tutor') {
      getTutorSquad(selectedMeetingID)
        .then(meeting => {
          if (assistanceType === 'mentees') {
            getAttribute = 'mentee_attendance';
            saveAttribute = 'Mentee Attendance';
          } else if (assistanceType === 'mentors') {
            getAttribute = 'mentor_attendance';
            saveAttribute = 'Mentor Attendance';
          } else {
            getAttribute = 'contact_attendance';
            saveAttribute = 'Other Attendance';
          }

          attended = meeting[getAttribute] || [];

          selectedPeople.forEach(mentee => {
            if (mentee && filteredList.find(person => person.id === mentee) && attended.indexOf(mentee) === -1) attended.unshift(mentee);
          });

          saveTutorSquadAttendance(selectedMeetingID, { [saveAttribute]: attended }).then(() => {
            this.setState({ loading: false });
            alert('Attendance has been successfully saved');
          });
        });
    } else { // event
      getEvent(selectedMeetingID)
        .then(meeting => {
          if (assistanceType === 'mentees') {
            getAttribute = 'mentee_attendance';
            saveAttribute = 'Mentees Attending';
          } else if (assistanceType === 'mentors') {
            getAttribute = 'mentor_attendance';
            saveAttribute = 'Mentors Attending';
          } else {
            getAttribute = 'contact_attendance';
            saveAttribute = 'Contacts Attending';
          }

          attended = meeting[getAttribute] || [];

          selectedPeople.forEach(mentee => {
            if (mentee && filteredList.find(person => person.id === mentee) && attended.indexOf(mentee) === -1) attended.unshift(mentee);
          });

          saveEventAttendance(selectedMeetingID, { [saveAttribute]: attended }).then(() => {
            this.setState({ loading: false });
            alert('Attendance has been successfully saved');
          });
        });
    }
  }

  handleFilterInfo = (value, attribute) => {
    let { filteredInfo } = this.state;
    if (filteredInfo) {
      filteredInfo[attribute] = value;
    } else {
      filteredInfo = { [attribute]: value };
    }
    this.setState({ filteredInfo });
  }

  checkAll = list => {
    const { selectedPeople } = this.state;
    list.forEach(item => {
      if (selectedPeople.indexOf(item.id) === -1) selectedPeople.unshift(item.id);
    });
    this.setState({ selectedPeople });
  }

  uncheckAll = list => {
    const { selectedPeople } = this.state;
    const selectedIds = list.map(item => item.id);
    this.setState({ selectedPeople: selectedPeople.filter(item => selectedIds.indexOf(item) === -1) });
  }

  filterProgramSites = value => {
    const { programSites } = this.state;
    if (value && value.length > 2) {
      this.setState({
        filteredProgramSites: programSites.filter(site => site.reporting_name && site.reporting_name.toLowerCase().indexOf(value.toLowerCase()) > -1),
      });
    }
  }

  renderTableFooter = () => {
    const { selectedPeople, peopleList } = this.state;

    return (
      <div className="clearfix w100 wrap">
        <div className="right">Assistance: {selectedPeople.length} / {peopleList.length}</div>
      </div>
    );
  }

  renderFilters = () => {
    const { peopleList, assistanceType } = this.state;

    const schoolsFilter = [];
    const yearLevelFilter = [];
    const genderFilter = [];
    const contactTypeFilter = [];
    const positionFilter = [];
    peopleList.forEach(item => {
      if (item.school && schoolsFilter.indexOf(item.school[0]) === -1) schoolsFilter.unshift(item.school[0]);
      if (item.year_level && yearLevelFilter.indexOf(item.year_level[0]) === -1) yearLevelFilter.unshift(item.year_level[0]);
      if (item.gender && genderFilter.indexOf(item.gender) === -1) genderFilter.unshift(item.gender);
      if (item.contact_type && contactTypeFilter.indexOf(item.contact_type) === -1) contactTypeFilter.unshift(item.contact_type);
      if (item.position && positionFilter.indexOf(item.position) === -1) positionFilter.unshift(item.position);
    });

    return (
      <div className="border rounded p2 mb2">
        <h3 className="pb2 capitalize block">Filters</h3>
        <div className="clearfix w100 wrap">
          {assistanceType === 'mentee' &&
            <div>
              <div className="sm-col o7-r o7-b sm-col-6 md-col-6">
                <Select
                  placeholder="School"
                  multiple
                  showSearch
                  optionFilterProp="filterProp"
                  optionLabelProp="filterProp"
                  allowClear
                  onChange={value => this.handleFilterInfo(value, 'school')}
                >
                  {schoolsFilter.map(item => {
                    const name = this.getSchoolName(item);
                    return <Option key={item} value={item} filterProp={name}>{name}</Option>
                  })}
                </Select>
              </div>
              <div className="sm-col o7-r o7-b sm-col-6 md-col-6">
                <Select
                  placeholder="Year level"
                  multiple
                  showSearch
                  optionFilterProp="filterProp"
                  optionLabelProp="filterProp"
                  allowClear
                  onChange={value => this.handleFilterInfo(value, 'year_level')}
                >
                  {yearLevelFilter.sort((a, b) => Number(a) - Number(b)).map(item => <Option key={item} value={item} filterProp={item}>{item}</Option>
                  )}
                </Select>
              </div>
            </div>
          }
          {assistanceType === 'mentors' &&
            <div className="sm-col o7-r o7-b sm-col-6 md-col-6">
              <Select
                placeholder="Gender"
                multiple
                showSearch
                optionFilterProp="filterProp"
                optionLabelProp="filterProp"
                allowClear
                onChange={value => this.handleFilterInfo(value, 'gender')}
              >
                {genderFilter.sort((a, b) => Number(a) - Number(b)).map(item => <Option key={item} value={item} filterProp={item}>{item}</Option>
                )}
              </Select>
            </div>
          }
          {assistanceType === 'contacts' &&
            <div>
              <div className="sm-col o7-r o7-b sm-col-6 md-col-6">
                <Select
                  placeholder="Contact type"
                  multiple
                  showSearch
                  optionFilterProp="filterProp"
                  optionLabelProp="filterProp"
                  allowClear
                  onChange={value => this.handleFilterInfo(value, 'contact_type')}
                >
                  {contactTypeFilter.sort((a, b) => Number(a) - Number(b)).map(item => <Option key={item} value={item} filterProp={item}>{item}</Option>
                  )}
                </Select>
              </div>
              <div className="sm-col o7-r o7-b sm-col-6 md-col-6">
                <Select
                  placeholder="Position"
                  multiple
                  showSearch
                  optionFilterProp="filterProp"
                  optionLabelProp="filterProp"
                  allowClear
                  onChange={value => this.handleFilterInfo(value, 'position')}
                >
                  {positionFilter.sort((a, b) => Number(a) - Number(b)).map(item => <Option key={item} value={item} filterProp={item}>{item}</Option>
                  )}
                </Select>
              </div>
            </div>
          }
        </div>
        <div className="clearfix">
          <div className="sm-col o7-r o7-b sm-col-12 md-col-12">
            <input
              placeholder="Query search"
              className="input"
              onChange={e => this.handleFilterInfo(e.target.value, 'query')}
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {
      programDays,
      tutorSquads,
      events,
      selectedPeople,
      peopleList,
      filteredProgramSites,
      loading,
      meetingType,
      assistanceType,
      userIsLogged,
    } = this.state;

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
          <div>
            <div className="profile-avatar">
              {record.photo && record.photo.length && record.photo[0].url
                ? <img alt={text} src={record.photo[0].url} />
                : <span>{this.getInitials(text)}</span>
              }
            </div>
            <div className="inline-block ml2">{text}</div>
          </div>
        ),
      }, {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: 'Attended',
        dataIndex: 'attended',
        key: 'attended',
        render: (text, record) => (
          <input type="checkbox" onChange={e => this.handleAssistChange(e.target.checked, record.id)} checked={selectedPeople.indexOf(record.id) > -1} />
        ),
      },
    ];

    if (assistanceType === 'mentees') {
      columns.splice(1, 0, {
        title: 'School',
        dataIndex: 'school',
        key: 'school',
        render: text => (
          <span>{this.getSchoolName(text[0])}</span>
        ),
      }, {
        title: 'Year level',
        dataIndex: 'year_level',
        key: 'year_level',
      });
    } else if (assistanceType === 'contacts') {
      columns.splice(3, 0, {
        title: 'Contact Type',
        dataIndex: 'contact_type',
        key: 'contact_type',
      });
    }

    const dataList = this.getFilteredList(peopleList);

    return (
      <div className="form-wrap mx-auto px3 mb4 pb2 attendance-box">
        <div className="my4">
          <h1 className="center pb2 capitalize">Mentee Attendance</h1>
        </div>
        {userIsLogged
          ? (
            <div>
              <div className="center clearfix w100 m1 my3">
                <button type="button" className="login-button submit" onClick={this.logout}>Logout</button>
              </div>
              <form acceptCharset="UTF-8" className="clearfix">
                <div className="sm-col o7-r o7-b sm-col-12 md-col-12">
                  <Select
                    placeholder="Meeting type"
                    showSearch
                    optionFilterProp="filterProp"
                    optionLabelProp="filterProp"
                    notFoundContent="No event type found"
                    onChange={this.handleMeetingTypeChange}
                  >
                    <Option key="event" value="event" filterProp="Event">Event</Option>
                    <Option key="tutor" value="tutor" filterProp="Tutor squads">Tutor squads</Option>
                    <Option key="program" value="program" filterProp="Program day">Program day</Option>
                  </Select>
                </div>
                <div className="sm-col o7-r o7-b sm-col-12 md-col-12">
                  <Select
                    placeholder="Assistance type"
                    showSearch
                    optionFilterProp="filterProp"
                    optionLabelProp="filterProp"
                    notFoundContent="No assistance type found"
                    onChange={this.handleAssistanceTypeChange}
                  >
                    <Option key="mentors" value="mentors" filterProp="Mentors">Mentors</Option>
                    <Option key="mentees" value="mentees" filterProp="Mentees">Mentees</Option>
                    <Option key="contacts" value="contacts" filterProp="Contacts">Contacts</Option>
                  </Select>
                </div>
                {meetingType && assistanceType && (
                  <div>
                    <div className="sm-col o7-r o7-b sm-col-12 md-col-12">
                      <Select
                        onSearch={this.filterProgramSites}
                        placeholder="Program Site Name"
                        onChange={this.handleProgramSiteChange}
                        filterOption={false}
                        notFoundContent="Enter Program Site Name"
                      >
                        {filteredProgramSites.map(site => <Option key={site.id} value={site.reporting_name} filterProp={site.reporting_name}>{site.reporting_name}</Option>
                        )}
                      </Select>
                    </div>
                    {meetingType === 'program' && programDays.length > 0 &&
                      <div className="sm-col o7-r o7-b sm-col-12 md-col-12">
                        <Select
                          placeholder="Program day"
                          showSearch
                          optionFilterProp="filterProp"
                          optionLabelProp="filterProp"
                          notFoundContent="No program days available for this program site"
                          onChange={this.handleProgramDayChange}
                        >
                          {programDays.map(day => <Option key={day.id} value={day.id} filterProp={day.name}>{day.name}</Option>
                          )}
                        </Select>
                      </div>
                    }
                    {meetingType === 'tutor' && tutorSquads.length > 0 &&
                      <div className="sm-col o7-r o7-b sm-col-12 md-col-12">
                        <Select
                          placeholder="Tutor squad"
                          showSearch
                          optionFilterProp="filterProp"
                          optionLabelProp="filterProp"
                          notFoundContent="No tutor squad available for this program site"
                          onChange={this.handleTutorSquadChange}
                        >
                          {tutorSquads.map(day => <Option key={day.id} value={day.id} filterProp={day.name}>{day.name}</Option>
                          )}
                        </Select>
                      </div>
                    }
                    {meetingType === 'event' && events.length > 0 &&
                      <div className="sm-col o7-r o7-b sm-col-12 md-col-12">
                        <Select
                          placeholder="Event"
                          showSearch
                          optionFilterProp="filterProp"
                          optionLabelProp="filterProp"
                          notFoundContent="No events available for this program site"
                          onChange={this.handleEventsChange}
                        >
                          {events.map(day => <Option key={day.id} value={day.id} filterProp={day.name}>{day.name}</Option>
                          )}
                        </Select>
                      </div>
                    }
                  </div>
                )}
              </form>
              {peopleList && peopleList.length > 0 &&
                <div>
                  {this.renderFilters()}
                  <div className="wrap w100 clearfix m1">
                    <div className="right text-decoration-none c-blue">
                      <span onClick={() => this.checkAll(dataList)}>Check all</span>
                      <div className="inline-block mx1">/</div>
                      <span onClick={() => this.uncheckAll(dataList)}>Uncheck all</span>
                    </div>
                  </div>
                  <div className="clearfix m1 wrap">
                    <Table
                      columns={columns}
                      data={dataList}
                      rowKey={record => record.id}
                      emptyText={`No mentees for this ${meetingType === 'program' ? 'program day' : (meetingType === 'tutor' ? 'tutor squad' : 'event')}`}
                      footer={this.renderTableFooter}
                    />
                  </div>
                  <div className="center clearfix w100 wrap m1">
                    <button type="button" className="submit" onClick={() => this.handleSubmit(dataList)}>Submit</button>
                  </div>
                </div>
              }
            </div>
          ) : (
            <div className="center clearfix w100 m1 my3">
              <button type="button" className="login-button submit" onClick={this.login}>Login</button>
            </div>
          )
        }
        {loading && <Loading />}
      </div>
    );
  }
}
/* eslint-enable no-alert */
