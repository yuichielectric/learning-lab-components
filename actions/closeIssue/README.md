# Close an issue

`closeIssue`: Closes an issue on GitHub.

## Usage

Provide an issue title or number, and the action will close that issue in the repository if it exists, otherwise it will throw an error.

```yaml
actions:
- type: closeIssue
  issue: Title of an issue
- type: closeIssue
  issue: 4
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Issue | `issue` | Title or number of the issue to close | Gets the issue number from the webhook payload |  |
