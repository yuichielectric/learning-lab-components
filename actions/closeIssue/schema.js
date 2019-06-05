const Joi = require('joi')

module.exports = Joi.object({
  issue: Joi.alternatives(Joi.string(), Joi.number())
    .meta({ label: 'Issue' })
    .description('The number or title of the issue to close.')
})
  .description('Closes an issue on GitHub.')
