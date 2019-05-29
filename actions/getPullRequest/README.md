# Get a Pull Request

`getPullRequest`: Gets a Pull Request from GitHub.



```yaml
actions:
- type: getPullRequest
- type: getPullRequest
  pullRequest: 1
- type: getPullRequest
  pullRequest: An existing pull request
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Pull Request | `pullRequest` | Pull Request title or number. | Gets the pull request number from the webhook payload. |  |
| Wait for `mergeable` field | `waitForMergeable` | Only move on when the pull request's mergeable field has been determined. | true |  |
