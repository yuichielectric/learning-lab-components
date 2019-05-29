# Get an Issue

`getIssue`: Gets an Issue from GitHub.



```yaml
actions:
- type: getIssue
- type: getIssue
  issue: 1
- type: getIssue
  issue: An existing issue
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Issue | `issue` | Issue title or number. | Gets the issue number from the webhook payload. |  |
