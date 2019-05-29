const Joi = require('joi')

module.exports = Joi.object({
  method: Joi.string()
    .meta({ label: 'Method' })
    .description('The method on the Octokit SDK to use. This should be a string like `issues.create`.')
    .required()
}).options({ allowUnknown: true })
