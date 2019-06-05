const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const START_ACTIONS_LIST = '<!-- START_ACTIONS_LIST -->'
const END_ACTIONS_LIST = '<!-- END_ACTIONS_LIST -->'
const tocReg = new RegExp(START_ACTIONS_LIST + '[\\s\\S]+' + END_ACTIONS_LIST)

class DocGenerator {
  constructor (pathToActions) {
    this.pathToActions = pathToActions
  }

  async generate () {
    const dirs = this.filterDirectories()
    this.writeConfigs(dirs)
    this.updateTableOfContents(dirs)
  }

  reduceConfigsToRows ({ options }) {
    return options.reduce((prev, opt) => {
      return prev +
      `| ${opt.title} | \`${opt.property}\` | ${opt.description || ''} | ${opt.default || ''} | ${opt.required ? '✔' : ''} |\n`
    }, '')
  }

  filterDirectories () {
    return fs.readdirSync(this.pathToActions)
      .filter(dir => {
        const fullDir = path.join(this.pathToActions, dir)
        return fs.lstatSync(fullDir).isDirectory()
      })
  }

  template (dir, config) {
    return `# ${config.title}

\`${dir}\`: ${config.description}

${config.usage ? `## Usage

${config.usage}` : ''}

\`\`\`yaml
actions:
${yaml.safeDump(config.examples, { indentation: 4 })}\`\`\`

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
${this.reduceConfigsToRows(config)}`
  }

  writeConfigs (dirs) {
    for (const dir of dirs) {
      const fullDir = path.join(this.pathToActions, dir)

      try {
        const config = yaml.safeLoad(fs.readFileSync(path.join(fullDir, 'config.yml'), 'utf8'))
        const contents = this.template(dir, config)
        fs.writeFileSync(path.join(fullDir, 'README.md'), contents)
      } catch (e) {
        console.error(`🛑 There was an error preparing the README for ${dir}`, e)
      }
    }
  }

  updateTableOfContents (dirs) {
    const readmePath = path.join(this.pathToActions, 'README.md')
    const list = dirs.reduce((prev, dir) => `${prev}* [${dir}](./${dir})\n`, '')
    const readme = fs.readFileSync(readmePath, 'utf8')
    const newReadme = readme.replace(tocReg, `${START_ACTIONS_LIST}\n${list}\n${END_ACTIONS_LIST}`)
    return fs.writeFileSync(readmePath, newReadme)
  }
}

const actionsDir = path.join(__dirname, '..', 'actions')
const docs = new DocGenerator(actionsDir)
docs.generate().then(() => console.info('\n✅ Created the action docs!'))
