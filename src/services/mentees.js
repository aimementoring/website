import { loadList } from '../utils/airtableLoader';

const fieldsMapping = {
  id: 'id',
  name: 'Full Name',
  photo: 'Photo',
  school: 'School',
  gender: 'Gender',
  age: 'Age',
  year_level: 'Year Level',
};

const config = {
  baseName: process.env.REACT_APP_AIRTABLE_PROGRAM_BASE,
  table: 'Mentees',
  gridView: 'All',
  recordBuilder: record => ({
    id: record.id,
    name: record.get(fieldsMapping.name),
    photo: record.get(fieldsMapping.photo),
    school: record.get(fieldsMapping.school),
    gender: record.get(fieldsMapping.gender),
    age: record.get(fieldsMapping.age),
    year_level: record.get(fieldsMapping.year_level),
  }),
};

export async function loadMentees(filter, fields) {
  return loadList(filter, fields, fieldsMapping, config);
}
