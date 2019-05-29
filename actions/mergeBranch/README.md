# Merge a branch

`mergeBranch`: Merges a branch into another branch



```yaml
actions:
- type: mergeBranch
  head: a-feature-branch
- type: mergeBranch
  head: a-feature-branch
  base: release-one
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Head branch | `head` | Name of the branch to merge from |  | ✔ |
| Base branch | `base` | Name of the branch to merge into | master |  |
