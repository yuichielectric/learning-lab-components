# createFile

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| File name | `filename` | The name of the file to create. This must be a file in the `responses` folder of your course repository. | `` | ✔ |
| Branch | `branch` | The branch on which to create the file. This defaults to `master`. | `master` |  |
| Message | `message` | The commit message for the commit that creates the file. | `` |  |
| New name | `new_name` | The name of the file to be created. This can include a path, like `example/file.md`. | `` |  |
| Data | `data` | An object of data that will be used in the response template. This can include values from the webhook payload, information about the user, or values returned from previous actions in the same step. | `` |  |

