const Joi = require('joi')
const gate = require('../gate/schema')

const state = Joi.object({
  description: Joi.string()
    .meta({ label: 'Description' }),
  target_url: Joi.string()
    .meta({ label: 'Target URL' })
    .uri()
})

module.exports = Joi.object({
  state: Joi.alternatives(Joi.string().valid('error', 'failure', 'pending', 'success'), gate)
    .meta({ label: 'State' })
    .description('The state of the status to create.')
    .required(),
  error: state,
  pending: state,
  failure: state,
  success: state,
  sha: Joi.string()
    .meta({ label: 'Sha' })
    .description('The commit sha to create the status for. This will default to the head commit from the webhook payload if available.'),
  context: Joi.string()
    .meta({ label: 'Context' })
    .description('A unique identifier for this status - this can be used to overwrite an existing status on the same sha.')
})
  .description('Creates a status on a commit or pull request')
