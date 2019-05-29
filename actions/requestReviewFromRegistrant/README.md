# Requests that the user review a PR

`requestReviewFromRegistrant`: Requests a Pull Request review from the registrant



```yaml
actions:
- type: requestReviewFromRegistrant
- type: requestReviewFromRegistrant
  pullRequest: A pull request
- type: requestReviewFromRegistrant
  pullRequest: 2
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Pull Request | `pullRequest` | Pull Request to request a new review on | Gets the Pull Request number from the webhook payload |  |
