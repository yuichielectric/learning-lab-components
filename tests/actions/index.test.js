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
    for (let actionName of actionNames) {
      expect(actionsReadme).toContain(`\n* [${actionName}](./${actionName})\n`)
    }
  })

  it('each action has the minimum set of required files', async () => {
    for (let actionName of actionNames) {
      const actionDirFiles =
        fs.readdirSync(
          path.join(actionsDir, actionName),
          { withFileTypes: true }
        )
          .filter(ent => ent.isFile())
          .map(ent => ent.name)

      // Has "README.md" file?
      expect(actionDirFiles.find(name => name === 'README.md')).toBeTruthy()

      // Has "config.yml" file?
      expect(actionDirFiles.find(name => name === 'config.yml')).toBeTruthy()

      // Has "index.js" file?
      expect(actionDirFiles.find(name => name === 'index.js')).toBeTruthy()

      // Has "schema.js" file?
      expect(actionDirFiles.find(name => name === 'schema.js')).toBeTruthy()

      // Has "${actionName}.test.js" file?
      expect(actionDirFiles.find(name => name === `${actionName}.test.js`)).toBeTruthy()
    }
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
