const core = require('@actions/core');
const opsgenie = require('opsgenie-sdk');

opsgenie.configure({
    'api_key': core.getInput('api_key')
});

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

