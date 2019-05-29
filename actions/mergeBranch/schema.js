const Joi = require('joi')

module.exports = Joi.object({
  head: Joi.string()
    .meta({ label: 'Head branch' })
    .description('The head branch to merge from.')
    .required(),
  base: Joi.string()
    .meta({ label: 'Base branch' })
    .description('The base branch to merge into. This defaults to `master`.')
    .default('master')
})
