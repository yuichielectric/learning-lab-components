const Joi = require('joi')

module.exports = Joi.object({
  name: Joi.string()
    .meta({ label: 'Name' })
    .description('The name of the label.')
    .required(),
  color: Joi.string()
    .meta({ label: 'Color' })
    .description('The color of the label, as a hex color code.')
    .hex()
    .required(),
  description: Joi.string()
    .meta({ label: 'Description' })
    .description('The description of the label.')
})
