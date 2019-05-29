const Joi = require('joi')

module.exports = Joi.object({
  path: Joi.string()
    .meta({ label: 'Path or RegEx' })
    .description('The path or RegEx of the file you want to find.')
    .required(),
  tree: Joi.string()
    .meta({ label: 'Tree' })
    .description('A Git tree. This is often used in conjunction with `getTree`.'),
  multiple: Joi.boolean()
    .meta({ label: 'Multiple' })
    .description('Return an array of values instead of just the first one that matches.')
    .default(false)
})
