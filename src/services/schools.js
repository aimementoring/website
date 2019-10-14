import { loadList } from '../utils/airtableLoader';

const fieldsMapping = {
  id: 'id',
  name: 'Name',
  mentees: 'Mentees',
};

const config = {
  baseName: process.env.REACT_APP_AIRTABLE_PROGRAM_BASE,
  table: 'Schools',
  gridView: 'All',
  recordBuilder: record => ({
    id: record.id,
    name: record.get(fieldsMapping.name),
    mentees: record.get(fieldsMapping.mentees),
  }),
};

export async function loadSchoolAttendes(filter, fields) {
  return loadList(filter, fields, fieldsMapping, config);
}
