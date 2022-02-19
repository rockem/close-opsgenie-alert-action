const opsgenie = require('opsgenie-sdk');

opsgenie.configure({
  'api_key': process.env.OPSGENIE_API_KEY
});

const alias = process.argv[2];
const query = `alias:${alias} AND status:closed`;

opsgenie.alertV2.list({ query }, function (error, alerts) {
  if (error) {
    console.log(`ERROR: ${error.message}`);
    process.exit(1);
  } else {
    if (alerts.data.length === 0) {
      console.log(`ERROR: Failed to find closed alert with alias [${alias}]`);
      process.exit(2);
    }
  }
});