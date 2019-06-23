import { loadList } from '../utils/airtableLoader';

const fieldsMapping = {
  id: 'id',
  name: 'Full Name',
  photo: 'Photo',
  contact_type: 'Contact Type',
  program_site: 'Program Site',
  position: 'Position (Other)',
  relationship: 'Relationship (Parent/Guardian)',
  gender: 'Gender',
  age: 'Age',
  school: 'School',
  organisation: 'Organisation',
};

const config = {
  baseName: process.env.REACT_APP_AIRTABLE_PROGRAM_BASE,
  table: 'Contacts',
  gridView: 'All',
  recordBuilder: record => ({
    id: record.id,
    name: record.get(fieldsMapping.name),
    photo: record.get(fieldsMapping.photo),
    contact_type: record.get(fieldsMapping.contact_type),
    program_site: record.get(fieldsMapping.program_site),
    position: record.get(fieldsMapping.position),
    relationship: record.get(fieldsMapping.relationship),
    gender: record.get(fieldsMapping.gender),
    age: record.get(fieldsMapping.age),
    school: record.get(fieldsMapping.school),
    organisation: record.get(fieldsMapping.organisation),
  }),
};

export async function loadContacts(filter, fields) {
  return loadList(filter, fields, fieldsMapping, config);
}
