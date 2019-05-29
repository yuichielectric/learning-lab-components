# Update branch protection

`updateBranchProtection`: Updates the branch protection on a branch in the course repository

## Usage

In addition to `branch`, this action accepts the same options as [`@octokit/rest`'s `updateBranchProtection](https://octokit.github.io/rest.js/#api-Repos-updateBranchProtection).

```yaml
actions:
- type: updateBranchProtection
- type: updateBranchProtection
  branch: my-protected-branch
- type: updateBranchProtection
  enforce_admins: false
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Branch | `branch` | The branch name to update branch protection | `master` |  |
| Enforce for Admins | `enforce_admins` | Enforce all configured restrictions for administrators. | true |  |
