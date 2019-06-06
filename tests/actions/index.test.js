const path = require('path')
const fs = require('fs')

const actions = require('../../actions')

const actionsDir = path.join(__dirname, '..', '..', 'actions')

let actionNames =
  fs.readdirSync(actionsDir, { withFileTypes: true })
    .filter(ent => ent.isDirectory())
    .map(ent => ent.name)
    .sort()

describe('actions', () => {
  it('module has properties for all expected actions', async () => {
    const actionKeys = Object.keys(actions).sort()
    expect(actionKeys).toEqual(actionNames)
    expect(actionKeys).toMatchSnapshot()
  })

  describe.each(actionNames)('the action "%s"', (actionName) => {
    it('has the minimum set of required files', async () => {
      const actionDirFiles =
        fs.readdirSync(path.join(actionsDir, actionName), { withFileTypes: true })
          .filter(ent => ent.isFile())
          .map(ent => ent.name)

      expect(actionDirFiles).toContain('README.md')
      expect(actionDirFiles).toContain('config.yml')
      expect(actionDirFiles).toContain('index.js')
      expect(actionDirFiles).toContain('schema.js')
      expect(actionDirFiles).toContain(`${actionName}.test.js`)
    })
  })
})
