# Create a PR comment

`createPullRequestComment`: Creates a comment on a pull request on GitHub



```yaml
actions:
- type: createPullRequestComment
  body: suggested-changes.md
  file: some-file.js
  position: 5
- type: createPullRequestComment
  pullRequest: 10
  body: suggested-changes.md
  file: some-file.js
  position: 5
- type: createPullRequestComment
  pullRequest: Some pull request
  body: suggested-changes.md
  file: some-file.js
  position: 5
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Body | `body` | Body of the new comment |  | ✔ |
| File | `file` | The file to comment on |  | ✔ |
| Pull Request | `pullRequest` | The title or number of a Pull Request |  |  |
| Line number | `position` | The line number to comment on. This is the line number in the PR's unified diff. |  | ✔ |
