const Joi = require('joi')

module.exports = Joi.object({
  pullRequest: Joi.alternatives(Joi.number(), Joi.string())
    .meta({ label: 'Pull request' })
    .description('The number or title of the pull request to request a review. This will default to the pull request number from the trigger event.')
})
  .description('Requests a Pull Request review from the registrant')
  .example(
    [
      {
        pullRequest: 'A pull request'
      },
      { context: '' }
    ],
    [
      {
        pullRequest: 2
      },
      { context: '' }
    ]
  )
