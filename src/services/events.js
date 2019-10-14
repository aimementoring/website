import { loadList, airtableUpdateRecord, airtableFetchRecord } from '../utils/airtableLoader';

const fieldsMapping = {
  id: 'id',
  name: 'Name',
  audience: 'Audience',
  start: 'Start Time',
  end: 'End Time',
  mentee_attendance: 'Mentees Attending',
  mentor_attendance: 'Mentors Attending',
  contact_attendance: 'Contacts Attending',
  program_site: 'Program Site Involved',
  location: 'Location',
  type: 'Type',
  total_mentors_attended: 'Number of Mentors Attended',
};

const config = {
  baseName: process.env.REACT_APP_AIRTABLE_PROGRAM_BASE,
  table: 'Events',
  gridView: 'All',
  recordBuilder: record => ({
    id: record.id,
    name: record.get(fieldsMapping.name),
    audience: record.get(fieldsMapping.audience),
    start: record.get(fieldsMapping.start),
    end: record.get(fieldsMapping.end),
    mentee_attendance: record.get(fieldsMapping.mentee_attendance),
    mentor_attendance: record.get(fieldsMapping.mentor_attendance),
    contact_attendance: record.get(fieldsMapping.contact_attendance),
    program_site: record.get(fieldsMapping.program_site),
    location: record.get(fieldsMapping.location),
    type: record.get(fieldsMapping.type),
    total_mentors_attended: record.get(fieldsMapping.total_mentors_attended),
  }),
};

export async function loadEvents(filter, fields) {
  return loadList(filter, fields, fieldsMapping, config);
}

export async function getEvent(id) {
  return airtableFetchRecord(config, id);
}

export async function saveEventAttendance(tutorSquad, data) {
  return airtableUpdateRecord(config, tutorSquad, data);
}
