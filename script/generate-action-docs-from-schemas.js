const { actions } = require('../index')
const fs = require('fs')
const path = require('path')

const template = ({ key, description, rows }) => `# \`${key}\`
${description ? `> ${description}\n\n` : ''}
## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
${rows}
`

function mapChildrenToRows (children) {
  return Object.keys(children).reduce((prev, key) => {
    const opt = children[key]
    return prev +
    `| ${opt.meta && opt.meta[0] && opt.meta[0].label} | \`${key}\` | ${opt.description || ''} | \`${(opt.flags && opt.flags.default) || ''}\` | ${opt.flags && opt.flags.presence === 'required' ? '✔' : ''} |\n`
  }, '')
}

function generate (actionKey) {
  const schema = actions[actionKey].schema.describe()

  const rows = mapChildrenToRows(schema.children)
  return template({
    key: actionKey,
    title: (schema.meta && schema.meta[0] && schema.meta[0].label) || actionKey,
    description: schema.description || '',
    rows
  })
}

for (const actionKey in actions) {
  const pathToDoc = path.join(__dirname, '..', 'actions', actionKey, 'README.md')
  const body = generate(actionKey)
  fs.writeFileSync(pathToDoc, body)
}
