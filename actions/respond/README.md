# Respond to an issue or PR

`respond`: Posts a comment on an issue or pull request



```yaml
actions:
- type: respond
  with: my-response.md
- type: respond
  with: my-response.md
  issue: Title of an issue to comment in
- type: respond
  with: my-response.md
  issue: 4
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Response body | `with` | A markdown filename to use as the comment body |  | ✔ |
| Issue number or title | `issue` | The number or title of an issue/pull request | Gets the issue number from the webhook payload |  |
