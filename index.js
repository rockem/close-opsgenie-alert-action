const core = require('@actions/core');
const opsgenie = require('opsgenie-sdk');

const EU_URL = 'https://api.eu.opsgenie.com';

const createConnectionDetails = () => {
    const connectionDetails = {'api_key': core.getInput('api_key')}
    if (core.getInput('using_eu_url').trim() === 'true') {
        connectionDetails.set('host', EU_URL)
    }
    return connectionDetails;
}

opsgenie.configure(createConnectionDetails());

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

