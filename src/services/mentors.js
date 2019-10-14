import { loadList } from '../utils/airtableLoader';

const fieldsMapping = {
  id: 'id',
  name: 'Full Name',
  program_site: 'Program Site',
  photo: 'Photo',
  gender: 'Gender',
  enrolment_status: 'Enrolment Status',
  enrolment_type: 'Enrolment Type',
  age: 'Age',
};

const config = {
  baseName: process.env.REACT_APP_AIRTABLE_PROGRAM_BASE,
  table: 'Mentors',
  gridView: 'All',
  recordBuilder: record => ({
    id: record.id,
    name: record.get(fieldsMapping.name),
    program_site: record.get(fieldsMapping.program_site),
    photo: record.get(fieldsMapping.photo),
    gender: record.get(fieldsMapping.gender),
    enrolment_status: record.get(fieldsMapping.enrolment_status),
    enrolment_type: record.get(fieldsMapping.enrolment_type),
    age: record.get(fieldsMapping.age),
  }),
};

export async function loadMentors(filter, fields) {
  return loadList(filter, fields, fieldsMapping, config);
}
