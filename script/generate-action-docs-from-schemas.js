const { actions } = require('../index')
const fs = require('fs')
const path = require('path')
const jsYaml = require('js-yaml')

const template = ({ key, description, rows, examples }) => `# \`${key}\`

${description}

${examples}

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

function mapExamples (examples, key) {
  const blocks = examples
    .map(obj => `${obj.options.context}\n\n\`\`\`\n${jsYaml.safeDump({ type: key, ...obj.value })}\`\`\``)
    .join('\n\n')
  return `## Examples\n\n${blocks}`
}

function generate (actionKey) {
  const schema = actions[actionKey].schema.describe()
  const rows = mapChildrenToRows(schema.children)
  const examples = schema.examples ? mapExamples(schema.examples, actionKey) : ''

  return template({
    key: actionKey,
    title: (schema.meta && schema.meta[0] && schema.meta[0].label) || actionKey,
    description: schema.description || '',
    rows,
    examples
  })
}

for (const actionKey in actions) {
  const pathToDoc = path.join(__dirname, '..', 'actions', actionKey, 'README.md')
  const body = generate(actionKey)
  fs.writeFileSync(pathToDoc, body)
}
