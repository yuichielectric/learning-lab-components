# Merge a Pull Request

`mergePullRequest`: Merges a Pull Request on GitHub.



```yaml
actions:
- type: mergePullRequest
- type: mergePullRequest
  pullRequest: 1
- type: mergePullRequest
  pullRequest: An existing pull request
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Pull Request | `pullRequest` | Title or Number of the new Pull Request | Gets the Pull Request number from the webhook payload |  |
