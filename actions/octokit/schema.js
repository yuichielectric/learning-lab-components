const Joi = require('joi')

module.exports = Joi.object({
  method: Joi.string()
    .meta({ label: 'Method' })
    .description('The method on the Octokit SDK to use. This should be a string like `issues.create`.')
    .required()
}).options({ allowUnknown: true })
  .description('Calls a method in the Octokit library')
  .example(
    [
      {
        method: 'issues.create',
        title: 'A new issue'
      },
      { context: '' }
    ],
    [
      {
        method: 'pullRequests.merge',
        number: 2
      },
      { context: '' }
    ],
    [
      {
        method: 'migrations.getImportStatus',
        requester: 'user'
      },
      { context: '' }
    ]
  )
