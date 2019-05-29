# createPullRequest

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Title | `title` | The title of the pull request. | `` | ✔ |
| Body | `body` | The body of the pull request. | `` | ✔ |
| Head branch | `head` | The head branch of the pull request. | `` | ✔ |
| Base branch | `base` | The base branch of the pull request. This defaults to `master`. | `master` |  |
| Comments | `comments` | A list of response files that will be posted to the issue as comments upon creation. | `` |  |
| Data | `data` | An object of data that will be used in the response template. This can include values from the webhook payload, information about the user, or values returned from previous actions in the same step. | `` |  |

