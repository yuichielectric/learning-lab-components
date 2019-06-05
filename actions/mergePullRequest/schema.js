const Joi = require('joi')

module.exports = Joi.object({
  pullRequest: Joi.alternatives(Joi.number(), Joi.string())
    .meta({ label: 'Pull request' })
    .description('The number or title of the pull request to merge. This will default to the pull request number from the trigger event.')
})
  .description('Merges a Pull Request on GitHub.')
