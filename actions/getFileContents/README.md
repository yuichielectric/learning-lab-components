# Get a file's contents

`getFileContents`: Gets the contents of a file at a specific commit.



```yaml
actions:
- type: getFileContents
  filename: README.md
- type: getFileContents
  filename: .github/ISSUE_TEMPLATE.md
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| File name | `filename` | Name of the file to retrieve |  | ✔ |
| Sha | `sha` | The sha at which to retrieve the file contents | The head commit sha from the pull request or push payload |  |
