const core = require('@actions/core');
const opsgenie = require('opsgenie-sdk');
const { connectionOptions } = require('./src/connection');

opsgenie.configure(connectionOptions(core.getInput('api_key'), core.getInput('using_eu')));

const alert_identifier = {
    identifier: core.getInput('alias'),
    identifierType: "alias"
};

const close_alert_data = {
    note: core.getInput('note'),
    user: core.getInput('user')
};

opsgenie.alertV2.close(alert_identifier, close_alert_data, function (error) {
    if (error) {
        core.setFailed(`ERROR: ${error.message}`);
    } else {
        console.log(`Request sent for closing alert with alias: ${core.getInput('alias')}`);
    }
});

