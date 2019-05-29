const Joi = require('joi')
const data = require('../../schemas/data')

module.exports = Joi.object({
  with: Joi.string()
    .meta({ label: 'With' })
    .description('The name of the response file to use in the generated comment.')
    .required(),
  issue: Joi.alternatives(Joi.number(), Joi.string())
    .meta({ label: 'Issue or pull request' })
    .description('The number or title of the issue or pull request to comment on. This will default to the number from the trigger event.'),
  data
})
