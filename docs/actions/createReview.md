# createReview

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Body | `body` | A response file for the body of the review. | `` | ✔ |
| Event | `event` | The type of review to create. | `` | ✔ |
| Number (deprecated) | `number` | The number of the pull request. | `` |  |
| Pull request | `pullRequest` | The title or number of the pull request. If omitted, the comment will be created on the pull request from the trigger event. | `` |  |
| Data | `data` | An object of data that will be used in the response template. This can include values from the webhook payload, information about the user, or values returned from previous actions in the same step. | `` |  |

