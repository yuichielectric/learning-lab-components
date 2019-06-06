const Joi = require('joi')

module.exports = Joi.object({
  method: Joi.string()
    .meta({ label: 'Method' })
    .description('The method on the Octokit SDK to use. This should be a string like `issues.create`.')
    .required()
}).options({ allowUnknown: true })
  .description('Calls a method in the Octokit library. [https://octokit.github.io/rest.js/](https://octokit.github.io/rest.js/)')
  .example(
    [
      {
        method: 'issues.create',
        title: 'A new issue'
      },
      { context: 'Use the `issues.create` method to create a new issue:' }
    ]
  )
