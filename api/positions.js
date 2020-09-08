import compact from 'lodash/compact';
import { airtableFetchRecords, airtableFetchRecord } from './airtableAPI';
import { formatJobs } from '../utils/positions';

const config = {
  baseName: process.env.REACT_APP_AIRTABLE_STAFF_RECRUITMENT_BASE,
  table: 'Positions',
  gridView: 'Main View',
  recordBuilder: (record) => ({
    id: record.id,
    requiredExperience: record.get('Required Experience'),
    name: record.get('Name'),
    expire: record.get('Expire') ? new Date(record.get('Expire')) : false,
    publish: new Date(record.get('Publish')),
    embedVideo: record.get('Video Embed'),
    description: record.get('Description'),
    applying: record.get('Applying for position'),
    availableIn: record.get('AvailableIn'),
    requiredDocuments: record.get('Required Documents') || [],
    jobPacks: record.get('Job Pack') || [],
    type: record.get('Type'),
    city: record.get('City') || '',
    state: record.get('State/Province') || '',
    country: record.get('Country') || '',
    term: record.get('Term') || '',
    messageQuestion: record.get('Message Question'),
    isThereVideoLink: record.get('Video Link?'),
    displayCampusSelect: record.get('University Campus?'),
    salaryRange: record.get('Salary Range'),
  }),
};

const buildFilter = () => {
  const isExpiredIfExpire = "IF({Expire}='', TRUE(), IS_AFTER({Expire}, NOW()))";
  const isPublishedIfPublish = "OR({Publish}!='', IS_BEFORE({Publish}, NOW()))";
  // const countryAvailable = `OR((FIND("${state.countrySelected.toLowerCase()}", AvailableIn) > 0), (FIND("global", AvailableIn) > 0))`;
  return `AND(${compact([
    // state.currentFilter,
    isExpiredIfExpire,
    isPublishedIfPublish,
    // countryAvailable,
  ]).join(', ')})`;
};

const fetchPositions = async () => {
  const filters = buildFilter();
  const loadedJobs = await loadPositions(filters, [
    'Name',
    'Expire',
    'Description',
    'City',
    'State/Province',
    'Country',
    'Term',
    'Salary Range',
    'Publish',
    'Type',
  ]);

  return formatJobs(loadedJobs);
};

export default async (req, res) => {
  const positions = await fetchPositions();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(positions));
};

export const loadPositions = async (filter, fields) => airtableFetchRecords(config, filter, fields);
