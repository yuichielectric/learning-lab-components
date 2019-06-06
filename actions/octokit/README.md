# `octokit`

Calls a method in the Octokit library. [https://octokit.github.io/rest.js/](https://octokit.github.io/rest.js/)

## Examples

Use the `issues.create` method to create a new issue:

```yaml
type: octokit
method: issues.create
title: A new issue
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Method | `method` | The method on the Octokit SDK to use. This should be a string like `issues.create`. | `` | ✔ |

