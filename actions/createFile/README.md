# Create a new file

`createFile`: Creates a new file



```yaml
actions:
- type: createFile
  filename: README.md
  data:
    bestUser: JasonEtco
- type: createFile
  filename: response.md
- type: createFile
  filename: response.md
  branch: my-feature-branch
- type: createFile
  filename: example-codeowners.md
  new_name: .github/CODEOWNERS
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| File name | `filename` | Name of the file in your course repository's response directory. |  | ✔ |
| Branch | `branch` | The branch to create the new file on. | master |  |
| Commit message | `message` | The commit message when adding the file | Creating new file {{ new_name || filename }} |  |
| Template data | `data` | Variables that you can pass to your file. |  |  |
| New name | `new_name` | What the new file should be called | If `new_name` is not provided, the file will have the same name as it does in the course repository. |  |
