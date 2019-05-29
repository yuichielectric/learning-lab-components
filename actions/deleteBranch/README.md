# Delete a branch

`deleteBranch`: Deletes the provided branch

## Usage

Usually after a pull request is merged, provide the name of the branch to delete it.

```yaml
actions:
- type: deleteBranch
  branch: example-branch
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Branch | `branch` | The name of the branch to delete |  | ✔ |
