import { loadList } from '../utils/airtableLoader';

const fieldsMapping = {
  id: 'id',
  name: 'Name',
  reporting_name: 'Reporting Name',
  program_coordinators: 'Program Coordinators',
  key: 'Field 21',
  schools: 'Schools',
  site_contacts: 'Site Contacts',
  university: 'University',
  phone: 'Phone',
  email: 'Email',
  aime_office_location: 'AIME Office Location',
  address: 'Address',
  city_town: 'City/Town',
  state_province: 'State/Province',
  post_code: 'Postcode',
  country: 'Country',
  mentors: 'Mentors',
  attendance_programs: 'Attendance - Program Days',
  attendance_events: 'Attendance - Events',
  total_students: 'Total Site Student Numbers',
  notes_attachments: 'Notes/Attachments',
  working_hours: 'Working Hours',
};

const config = {
  baseName: process.env.REACT_APP_AIRTABLE_PROGRAM_BASE,
  table: 'Program Sites',
  gridView: 'All Sites',
  recordBuilder: record => ({
    id: record.id,
    name: record.get(fieldsMapping.name),
    reporting_name: record.get(fieldsMapping.reporting_name),
    program_coordinators: record.get(fieldsMapping.program_coordinators),
    key: record.get(fieldsMapping.key),
    schools: record.get(fieldsMapping.schools),
    site_contacts: record.get(fieldsMapping.site_contacts),
    university: record.get(fieldsMapping.university),
    phone: record.get(fieldsMapping.phone),
    email: record.get(fieldsMapping.email),
    aime_office_location: record.get(fieldsMapping.aime_office_location),
    address: record.get(fieldsMapping.address),
    city_town: record.get(fieldsMapping.city_town),
    state_province: record.get(fieldsMapping.state_province),
    post_code: record.get(fieldsMapping.post_code),
    country: record.get(fieldsMapping.country),
    mentors: record.get(fieldsMapping.mentors),
    attendance_programs: record.get(fieldsMapping.attendance_programs),
    attendance_events: record.get(fieldsMapping.attendance_events),
    total_students: record.get(fieldsMapping.total_students),
    notes_attachments: record.get(fieldsMapping.notes_attachments),
    working_hours: record.get(fieldsMapping.working_hours),
  }),
};

export async function loadProgramSites(filter, fields) {
  return loadList(filter, fields, fieldsMapping, config);
}
