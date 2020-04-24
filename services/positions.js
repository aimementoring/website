import { airtableFetchRecords, airtableFetchRecord } from '../utils/airtableLoader';

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

const sitesConfig = {
  baseName: 'app0cOinHqPnUCxv8',
  table: 'Sites',
  gridView: 'Grid view',
  recordBuilder: (record) => (
    {
      text: record.get('Name'),
      value: record.get('Name'),
    }),
};

export const loadPositions = async (filter, fields) => airtableFetchRecords(config, filter, fields);

export const findJob = async (id, currentSite = 'global') => {
  const configPosition = config;
  const job = await airtableFetchRecord(configPosition, id);
  const today = new Date();

  if (job.expire && job.expire < today) throw new Error('This position is expired');

  if (today < job.publish) throw new Error('This position is not available');

  if (!job.availableIn.find((site) => site === currentSite.toLowerCase())) {
    throw new Error('This position is not available in this location');
  }
  return job;
};

export const loadUniversities = () => airtableFetchRecords(sitesConfig).then((options) => options);
