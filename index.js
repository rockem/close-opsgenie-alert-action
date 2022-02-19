const core = require('@actions/core');
const opsgenie = require('opsgenie-sdk');
const { connectionOptions } = require('./src/connection');

opsgenie.configure(
  connectionOptions(core.getInput('api_key'), core.getInput('using_eu_url')));

const alertIdentifier = {
  identifier: core.getInput('alias'),
  identifierType: "alias"
};

const closeAlertData = {
  note: core.getInput('note'),
  user: core.getInput('user')
};

opsgenie.alertV2.close(alertIdentifier, closeAlertData, function (error) {
  if (error) {
    core.setFailed(`ERROR: ${error.message}`);
  } else {
    console.log(`Request sent for closing alert with alias: ${core.getInput('alias')}`);
  }
});

