import { loadList, airtableUpdateRecord, airtableFetchRecord } from '../utils/airtableLoader';

const fieldsMapping = {
  id: 'id',
  name: 'Name',
  start: 'Start Time',
  end: 'End Time',
  schools: 'Attending Schools',
  mentee_attendance: 'Mentees Attended',
  mentor_attendance: 'Mentors Attended',
  contact_attendance: 'Other Attendance',
  mentee_missed_attendance: 'Mentees missed Attendance',
  mentors_missed_attendance: 'Mentors missed Attendance',
  program_site: 'Program Site',
  school_group: 'School Group',
  attending_schools: 'Attending Schools',
  year_level: 'Year Groups',
};

const config = {
  baseName: process.env.REACT_APP_AIRTABLE_PROGRAM_BASE,
  table: 'Program Days',
  gridView: 'All',
  recordBuilder: record => ({
    id: record.id,
    name: record.get(fieldsMapping.name),
    start: record.get(fieldsMapping.start),
    end: record.get(fieldsMapping.end),
    schools: record.get(fieldsMapping.schools),
    mentee_attendance: record.get(fieldsMapping.mentee_attendance),
    mentor_attendance: record.get(fieldsMapping.mentor_attendance),
    contact_attendance: record.get(fieldsMapping.contact_attendance),
    mentee_missed_attendance: record.get(fieldsMapping.mentee_missed_attendance),
    mentors_missed_attendance: record.get(fieldsMapping.mentors_missed_attendance),
    program_site: record.get(fieldsMapping.program_site),
    school_group: record.get(fieldsMapping.school_group),
    attending_schools: record.get(fieldsMapping.attending_schools),
    year_level: record.get(fieldsMapping.year_level),
  }),
};

export async function loadProgramDays(filter, fields) {
  return loadList(filter, fields, fieldsMapping, config);
}

export async function getProgramDay(id) {
  return airtableFetchRecord(config, id);
}

export async function saveProgramDayAttendance(programDay, data) {
  return airtableUpdateRecord(config, programDay, data);
}
