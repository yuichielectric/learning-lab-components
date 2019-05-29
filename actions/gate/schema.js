const Joi = require('joi')
const operations = require('./operations')

const gate = Joi.object({
  left: Joi.alternatives(Joi.number(), Joi.string(), Joi.boolean())
    .meta({ label: 'Left' })
    .description('The left side of the `if`. If no `operator` or `right` is present, this will be evaluated on its own.'),
  operator: Joi.string()
    .meta({ label: 'Operator' })
    .description('The conditional operator to use when evaluating the gate.')
    .valid(Object.keys(operations)),
  right: Joi.alternatives(Joi.number(), Joi.string(), Joi.boolean())
    .meta({ label: 'Right' })
    .description('The right side of the `if`.')
})

module.exports = gate.append({
  gates: Joi.array().items(gate),
  every: Joi.boolean()
    .meta({ label: 'Require every gate to pass' })
    .default(false),
  else: Joi.array()
    .meta({ label: 'Else' })
    .description('An action or list of actions to run if the gate fails.')
    .items(Joi.object().unknown())
    .single()
})
