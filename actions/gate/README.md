# Conditional gate

`gate`: Decides if the next action(s) should be run, and if the step passes or fails.

## Usage

Provide a conditional operation with a left, right and operator key. This can use `%___%` syntax to compare data from the action's context, like getting the relevant user's information or fields from the webhook payload.

```yaml
actions:
- type: gate
  left: hello
  operator: ===
  right: hello
- type: gate
  left: '%payload.sender.login%'
  operator: ===
  right: '%user.login%'
- type: gate
  left: '%payload.sender.login%'
  operator: ===
  right: '%user.login%'
  else:
    - type: respond
      with: This returned false!
- type: gate
  gates:
    - left: '%payload.sender.login%'
      operator: ===
      right: '%user.login%'
    - left: '%payload.sender.login%'
      operator: ===
      right: JasonEtco
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Left | `left` | The left side of the `if` |  |  |
| Right | `right` | The right side of the `if` |  |  |
| Operator | `operator` | A JavaScript-esque operator, like `===`, `>=`, etc. |  |  |
| Gates | `gates` | To test multiple conditions, you can pass multiple gates as a list of objects. |  |  |
| Every | `every` | If `gates` is set to a list of gates, then `every` requires that every one of those gates resolves to true, otherwise the action resolves to false. |  |  |
| Action on failure | `else` | An action to take if the condition fails. |  |  |
