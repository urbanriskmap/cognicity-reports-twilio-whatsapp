require('dotenv').load();

// use .env for tests, configure in serverless for prod
export default {
  API_KEY: process.env.API_KEY,
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  CARDS_API: process.env.CARDS_API || 'https://data.riskmap.us/cards/',
  CARDS_API_KEY: process.env.CARDS_API_KEY,
  CARDS_DECK: (process.env.CARDS_DECK || 'flood').split(','),
  CARDS_URL: process.env.CARDS_URL || 'https://cards.riskmap.us/',
  DEPLOYMENT_CODE: process.env.DEPLOYMENT_CODE || 'us',
  INSTANCE_REGION_CODE: process.env.INSTANCE_REGION_CODE,
  ENDPOINT_SEND: process.env.ENDPOINT_SEND,
  ENDPOINT_RECEIVE: process.env.ENDPOINT_RECEIVE,
  MAP_URL: process.env.MAP_URL || 'https://riskmap.us/',
};
