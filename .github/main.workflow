workflow "CI: Test the code" {
  on = "push"
  resolves = ["npm cit"]
}

action "npm cit" {
  uses = "docker://node:10-alpine"
  runs = "npm"
  args = "cit"
}
