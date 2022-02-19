const opsgenie = require('opsgenie-sdk');
const { expect } = require('chai');

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
    expect(alerts.data, `Failed to find closed alert with alias [${alias}]`).to.not.be.empty;
  }
});