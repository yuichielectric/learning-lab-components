const Joi = require('joi')
const data = require('../../schemas/data')

module.exports = Joi.object({
  body: Joi.string()
    .meta({ label: 'Body' })
    .description('A response file for the body of the review.')
    .required(),
  event: Joi.string()
    .meta({ label: 'Event' })
    .description('The type of review to create.')
    .valid('APPROVE', 'REQUEST_CHANGES', 'COMMENT')
    .required(),
  number: Joi.number()
    .meta({ label: 'Number (deprecated)' })
    .description('The number of the pull request.'),
  pullRequest: Joi.alternatives(Joi.number(), Joi.string())
    .meta({ label: 'Pull request' })
    .description('The title or number of the pull request. If omitted, the comment will be created on the pull request from the trigger event.'),
  data
})
  .description('Creates a Pull Request review on GitHub')
  .example(
    [
      {
        body: 'review-body.md',
        event: 'REQUEST_CHANGES'
      },
      { context: '' }
    ],
    [
      {
        body: 'review-body.md',
        event: 'REQUEST_CHANGES',
        number: 3
      },
      { context: '' }
    ]
  )
