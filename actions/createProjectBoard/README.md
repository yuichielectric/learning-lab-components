# Create Project Board

`createProjectBoard`: Creates a new Project Board in the user's repository



```yaml
actions:
- type: createProjectBoard
  name: New board
- type: createProjectBoard
  name: New board
  description: This board is the best board
  columns:
    - To do
    - In progress
    - Done
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Name | `name` | Name of the new project board |  | ✔ |
| Description | `body` | The description of the new project board |  |  |
| Columns | `columns` | A list of column names to create |  |  |
