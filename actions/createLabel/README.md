# Create a label

`createLabel`: Creates a new label on GitHub.



```yaml
actions:
- type: createLabel
  name: a label
  color: f87000
- type: createLabel
  name: another label
  color: f87000
  description: This label is used to label things
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Name | `name` | Name of the label. |  | ✔ |
| Color | `color` | The hexadecimal color code for the label, without the leading `#`. |  | ✔ |
| Description | `description` | A short description of the label. |  |  |
