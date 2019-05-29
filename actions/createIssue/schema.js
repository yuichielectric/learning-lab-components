const Joi = require('joi')
const data = require('../../schemas/data')

module.exports = Joi.object({
  title: Joi.string()
    .meta({ label: 'Title' })
    .description('The title of the issue to be created')
    .required(),
  body: Joi.string()
    .meta({ label: 'Body' })
    .description('The body of the issue to be generated - this should be a markdown response file name.')
    .required(),
  comments: Joi.array()
    .meta({ label: 'Comments' })
    .description('A list of response files that will be posted to the issue as comments upon creation.')
    .items(Joi.string()),
  data
})
