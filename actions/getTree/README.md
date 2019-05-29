# Get a tree

`getTree`: Gets a Git tree at either a given sha or the head of master



```yaml
actions:
- type: getTree
- type: getTree
  recursive: true
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Sha | `sha` | The sha to get the tree | The sha of the head commit of the default branch (usually master) |  |
| Recursive | `recursive` | Get a recursive tree |  |  |
