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

/**
 * Convert a list of children properties into table rows.
 */
function mapChildrenToRows (children) {
  return Object.keys(children).reduce((prev, key) => {
    const opt = children[key]
    return prev +
    `| ${opt.meta && opt.meta[0] && opt.meta[0].label} | \`${key}\` | ${opt.description || ''} | ${(opt.flags && opt.flags.default) ? `\`${opt.flags.default}\`` : ''} | ${opt.flags && opt.flags.presence === 'required' ? '✔' : ''} |\n`
  }, '')
}

/**
 * Convert Joi example objects into strings:
 *
 *  {{ context }}
 *  ```yaml
 *  {{ yaml }}
 *  ```
 */
function mapExamples (examples, key) {
  const blocks = examples
    .map(obj => {
      // Add the `type` property, because including it in the example wouldn't be valid for the schema
      const yaml = jsYaml.safeDump({ type: key, ...obj.value })
      // Include the context if it exists
      const prefix = obj.options && obj.options.context ? `${obj.options.context}\n\n` : ''
      return `${prefix}\`\`\`yaml\n${yaml}\`\`\``
    })
    .join('\n\n')
  return `## Examples\n\n${blocks}`
}

/**
 * Return a string to use as the file contents for the generated README.md
 */
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
