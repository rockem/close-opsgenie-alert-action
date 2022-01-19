# Close OpsGenie alert action

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

## Example usage
```
uses: rockem/close-opsgenie-alert-action@v1.1
with:
    api_key: ${{ secrets.OPSGENIE_API_KEY }}
    alias: alert-alias
    user: kuku@gmail.com
    note: Closing alert as it's not relevant any more
``` 