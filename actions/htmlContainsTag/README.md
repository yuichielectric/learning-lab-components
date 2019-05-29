# HTML Contains Tag

`htmlContainsTag`: Checks if the provided HTML string contains a specific HTML tag



```yaml
actions:
- type: htmlContainsTag
  html: <html><div>Hello!</div></html>
  tag: div
- type: htmlContainsTag
  html: <html><img src="example.png" /></html>
  tag: img
  attribute: src
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| HTML | `html` | The HTML string to check for a tag |  | ✔ |
| Tag | `tag` | The HTML tag, like `a` or `div`. |  | ✔ |
| Attribute | `attribute` | An attribute that the tag must have |  |  |
