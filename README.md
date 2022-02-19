# Close OpsGenie alert action
[![Tests](https://github.com/rockem/close-opsgenie-alert-action/actions/workflows/test.yml/badge.svg)](https://github.com/rockem/close-opsgenie-alert-action/actions/workflows/test.yml)
[![Compile index.js](https://github.com/rockem/close-opsgenie-alert-action/actions/workflows/compile.yml/badge.svg)](https://github.com/rockem/close-opsgenie-alert-action/actions/workflows/compile.yml)

This action closes OpsGenie alert by providing an alert alias

## Inputs

`api_key`

**Required** The api key provided by OpsGenie integration.

`alias`

**Required** The alias of the alert we want to close.

`user`

The actor of the close operation, by default it will be `github-action`

`note`

An added note to the close operation.

`using_eu_url`

Default value is false. Must set to true if required OpsGenie API endpoint is 'https://api.eu.opsgenie.com'.


## Example usage
```
uses: rockem/close-opsgenie-alert-action@v1
with:
    api_key: ${{ secrets.OPSGENIE_API_KEY }}
    alias: alert-alias
    user: kuku@gmail.com
    note: Closing alert as it's not relevant any more
``` 
