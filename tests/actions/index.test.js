const path = require('path')
const fs = require('fs')

const actions = require('../../actions')

const actionsDir = path.join(__dirname, '..', '..', 'actions')
const actionsDocsDir = path.join(__dirname, '..', '..', 'docs', 'actions')

describe('actions', () => {
  let actionNames

  beforeAll(() => {
    actionNames = fs.readdirSync(actionsDir, { withFileTypes: true })
      .filter(ent => ent.isDirectory())
      .map(ent => ent.name)
      .sort()
  })

  it('module has properties for all expected actions', async () => {
    const actionKeys = Object.keys(actions).sort()
    expect(actionKeys).toEqual(actionNames)
    expect(actionKeys).toMatchSnapshot()
  })

  it('README mentions all expected actions', async () => {
    const actionsReadme = fs.readFileSync(path.join(actionsDir, 'README.md'), { encoding: 'utf8' })
    const expectedContents = `## Available actions

<!-- START_ACTIONS_LIST -->
` + actionNames.map(name => `* [${name}](./${name})`).join('\n') + `

<!-- END_ACTIONS_LIST -->
`
    expect(actionsReadme).toContain(expectedContents)
  })

  it('associated documentation files exist for all expected actions', async () => {
    const actionsDocsFiles = fs.readdirSync(actionsDocsDir, { withFileTypes: true })
      .filter(ent => ent.isFile())
      .map(ent => ent.name)
      .sort()

    const expected = actionNames.map(name => `${name}.md`)

    expect(actionsDocsFiles).toEqual(expected)
  })
})
