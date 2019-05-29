# updateBranchProtection

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Branch | `branch` | The name of the branch to update protection settings on. This defaults to `master`. | `master` |  |
| Enforce protection for admins | `enforce_admins` | If enabled, these protection settings will be enforced for repository admins. | `true` |  |
| Required status checks | `required_status_checks` | A list of status checks that are required before a pull request can be merged into this branch. | `` |  |
| Required pull request reviews | `required_pull_request_reviews` |  | `` |  |

