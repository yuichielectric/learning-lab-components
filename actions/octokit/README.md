# Octokit

`octokit`: Calls a method in the Octokit library

## Usage

Using the `method` option with a value like `issues.create`, use the Octokit library's entire list of available methods. You can see what those are [on the Octokit docs](https://octokit.github.io/rest.js)

```yaml
actions:
- type: octokit
  method: issues.create
  title: A new issue
- type: octokit
  method: pullRequests.merge
  number: 2
- type: octokit
  method: migrations.getImportStatus
  requester: user
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Octokit method | `method` | Object dot notation for the Octokit method |  | ✔ |
| Requester | `requester` | Should this request be made as the installation or as the user? | `installation` |  |
