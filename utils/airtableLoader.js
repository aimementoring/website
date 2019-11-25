const Airtable = require('airtable');

export const airtableFetchRecords = async (config, filter = null, fields = null) => {
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
  });
  const base = Airtable.base(config.baseName);
  const options = [];
  const query = {
    maxRecords: 1000,
    view: config.gridView,
  };

  if (filter) query.filterByFormula = filter;
  if (fields) query.fields = fields;

  return new Promise((resolve, reject) => {
    base(config.table)
      .select(query)
      .eachPage((records, fetchNextPage) => {
        records.forEach((record) => {
          options.push(config.recordBuilder(record));
        });
        fetchNextPage();
      }, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(options);
        }
      });
  });
};

export const airtableFetchRecord = async (config, id) => {
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
  });
  const base = Airtable.base(config.baseName);

  return new Promise((resolve, reject) => {
    base(config.table).find(id, (err, record) => {
      if (err) {
        reject(err);
      } else {
        resolve(config.recordBuilder(record));
      }
    });
  });
};

export const airtableUpdateRecord = async (config, id, data) => {
  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
  });
  const base = Airtable.base(config.baseName);

  return new Promise((resolve, reject) => {
    base(config.table).update(id, data, (err, record) => {
      if (err) {
        reject(err);
      } else {
        resolve(config.recordBuilder(record));
      }
    });
  });
};

export const loadList = async (filter, fields, fieldsMapping, config) => {
  const fieldsAttributes = fields && fields.length
    ? fields.map((field) => fieldsMapping[field])
    : Object.keys(fieldsMapping).map((key) => fieldsMapping[key]);
  return airtableFetchRecords(config, filter, fieldsAttributes);
};
