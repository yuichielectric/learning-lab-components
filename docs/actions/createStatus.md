# createStatus

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| State | `state` | The state of the status to create. | `` | ✔ |
| undefined | `error` |  | `` |  |
| undefined | `pending` |  | `` |  |
| undefined | `failure` |  | `` |  |
| undefined | `success` |  | `` |  |
| Sha | `sha` | The commit sha to create the status for. This will default to the head commit from the webhook payload if available. | `` |  |
| Context | `context` | A unique identifier for this status - this can be used to overwrite an existing status on the same sha. | `` |  |

