const Joi = require('joi')
const data = require('../../schemas/data')

module.exports = Joi.object({
  filename: Joi.string()
    .meta({ label: 'File name' })
    .description('The name of the file to create. This must be a file in the `responses` folder of your course repository.')
    .required(),
  branch: Joi.string()
    .meta({ label: 'Branch' })
    .description('The branch on which to create the file. This defaults to `master`.')
    .default('master'),
  message: Joi.string()
    .meta({ label: 'Message' })
    .description('The commit message for the commit that creates the file.'),
  new_name: Joi.string()
    .meta({ label: 'New name' })
    .description('The name of the file to be created. This can include a path, like `example/file.md`.'),
  data
})
  .description('Creates a new file')
