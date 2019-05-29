# Open a Pull Request

`createPullRequest`: Opens a new Pull Request on GitHub.

## Usage

Provide a title and a body to create a new issue on GitHub.

```yaml
actions:
- type: createPullRequest
  title: Title of the Pull Request
  body: pull-request-body.md
  comments:
    - pr-comment.md
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Title | `title` | Title of the new Pull Request |  | ✔ |
| Body | `body` | Body of the new Pull Request |  | ✔ |
| Head | `head` | Head of the Pull Request (which branch to merge from) |  | ✔ |
| Base | `base` | Base of the Pull Request (which branch to merge into) | master |  |
| Comments | `comments` | A list of comments to add to the newly generated issue |  |  |
