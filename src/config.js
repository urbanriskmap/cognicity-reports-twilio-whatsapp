import dotenv from 'dotenv';

dotenv.config({silent: true});

// use .env for tests, configure in serverless for prod
// configure in serverless > functions > environment
// or in .env.yml
export default {
  API_KEY: process.env.API_KEY,
  CARDS_API: process.env.CARDS_API || 'https://data.riskmap.us/cards/',
  CARDS_API_KEY: process.env.CARDS_API_KEY,
  CARDS_DECK: (process.env.CARDS_DECK || 'flood').split(','),
  CARDS_URL: process.env.CARDS_URL || 'https://cards.riskmap.us/',
  DEFAULT_LANGUAGE: process.env.DEFAULT_LANGUAGE || 'en',
  DEPLOYMENT_CODE: process.env.DEPLOYMENT_CODE || 'us',
  DEFAULT_INSTANCE_REGION_CODE: process.env.DEFAULT_INSTANCE_REGION_CODE,
  MAP_URL: process.env.MAP_URL || 'https://riskmap.us/',
  NETWORK_NAME: process.env.NETWORK_NAME,
  NETWORK_NUMBER: process.env.NETWORK_NUMBER,
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
};
