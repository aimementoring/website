import { loadList, airtableUpdateRecord, airtableFetchRecord } from '../utils/airtableLoader';

const fieldsMapping = {
  id: 'id',
  name: 'Name',
  start: 'Start Time',
  end: 'End Time',
  year_level: 'Year Groups',
  mentee_attendance: 'Mentee Attendance',
  mentor_attendance: 'Mentor Attendance',
  contact_attendance: 'Other Attendance',
  program_site: 'Program Site',
  schools: 'School',
  total_mentees_attended: 'Mentees Attended',
};

const config = {
  baseName: process.env.REACT_APP_AIRTABLE_PROGRAM_BASE,
  table: 'Tutor Squads',
  gridView: 'All',
  recordBuilder: record => ({
    id: record.id,
    name: record.get(fieldsMapping.name),
    start: record.get(fieldsMapping.start),
    end: record.get(fieldsMapping.end),
    year_level: record.get(fieldsMapping.year_level),
    mentee_attendance: record.get(fieldsMapping.mentee_attendance),
    mentor_attendance: record.get(fieldsMapping.mentor_attendance),
    contact_attendance: record.get(fieldsMapping.contact_attendance),
    program_site: record.get(fieldsMapping.program_site),
    school: record.get(fieldsMapping.school),
    total_mentees_attended: record.get(fieldsMapping.total_mentees_attended),
  }),
};

export async function loadTutorSquads(filter, fields) {
  return loadList(filter, fields, fieldsMapping, config);
}

export async function getTutorSquad(id) {
  return airtableFetchRecord(config, id);
}

export async function saveTutorSquadAttendance(tutorSquad, data) {
  return airtableUpdateRecord(config, tutorSquad, data);
}
