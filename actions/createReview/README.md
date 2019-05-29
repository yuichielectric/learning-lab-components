# Create a PR Review

`createReview`: Creates a Pull Request review on GitHub

## Usage

Provide a title and a body to create a new issue on GitHub.

```yaml
actions:
- type: createReview
  body: review-body.md
  event: REQUEST_CHANGES
- type: createReview
  body: review-body.md
  event: REQUEST_CHANGES
  number: 3
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Body | `body` | Body of the new issue |  | ✔ |
| Event | `event` | A pull request review event |  | ✔ |
| Pull Request number | `number` | The number of a Pull Request | Gets the number from the webhook payload |  |
| Pull Request | `pullRequest` | The title or number of a Pull Request |  |  |
