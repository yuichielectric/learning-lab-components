# Find a file in a tree

`findInTree`: Finds a file in a given tree, either by path or matching a RegEx



```yaml
actions:
- type: findInTree
  path: example.md
- type: findInTree
  path: /^_posts\//
- type: findInTree
  multiple: true
  path: /^_posts\//
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Path or RegEx | `path` | The path or RegEx of the file you want to find |  |  |
| Tree | `tree` | A Git tree |  |  |
| Multiple | `multiple` | Return an array of values instead of just the first one that matches |  |  |
