# Create a Status

`createStatus`: Creates a status on a commit or pull request

## Usage

Provide a title and a body to create a new issue on GitHub.

```yaml
actions:
- type: createStatus
  state: '%pull_request.body%'
  failure:
    description: >-
      Your pull request needs a description in the body. Please edit the pull
      request to include a body.
    target_url: 'https://help.github.com/articles/editing-a-comment/'
  success:
    description: Your pull request has a body description.
    target_url: >-
      https://help.github.com/articles/creating-a-pull-request/#creating-the-pull-request
- type: createStatus
  state: failure
  context: my-special-context
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| State | `state` | If the state is a string and a valid state, the status' state will be that string. If its an object, it will be considered a [`gate`](../gate) action and evaluate to either `success` or `failure` |  | ✔ |
| State conditional, left side | `state.left` | A [`gate`](../gate) action. |  |  |
| State conditional, operator | `state.operator` | Response file name |  |  |
| State conditional, right side | `state.right` | Response file name |  |  |
| Description shown for a pending status | `pending.description` | Description for pending status |  |  |
| URL for a pending status | `pending.target_url` | URL for pending status |  |  |
| Description shown for a failing status | `failure.description` | Description for failure status |  |  |
| URL for a failing status | `failure.target_url` | URL for failure status |  |  |
| Description shown for a success status | `success.description` | Description for success status |  |  |
| URL for a success status | `success.target_url` | URL for success status |  |  |
| Commit sha | `sha` | Sha of the commit to set a status on | Gets sha from webhook payload |  |
| Status context | `context` | Status identifier string | The `slug` of the step |  |
