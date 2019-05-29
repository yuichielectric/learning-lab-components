# Create an issue

`createIssue`: Creates a new issue on GitHub.

## Usage

Provide a title and a body to create a new issue on GitHub.

```yaml
actions:
- type: createIssue
  title: Title of the issue
  body: issue-body.md
  comments:
    - issue-comment.md
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Title | `title` | Title of the new issue |  | ✔ |
| Body | `body` | Body of the new issue |  | ✔ |
| Comments | `comments` | A list of comments to add to the newly generated issue |  |  |
