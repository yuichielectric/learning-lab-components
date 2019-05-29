# Assign the registrant

`assignRegistrant`: Assigns the registered user to an issue or pull request



```yaml
actions:
- type: assignRegistrant
- type: assignRegistrant
  issue: Title of an issue
- type: assignRegistrant
  issue: 4
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Issue | `issue` | Title or number of the issue to close | Gets the issue number from the webhook payload |  |
