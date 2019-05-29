const operations = require('./operations')

function evaluate (options) {
  const { left, operator, right } = options
  if (operator && options.hasOwnProperty('right')) {
    if (!operations.hasOwnProperty(operator)) throw new Error(`Operation \`${operator}\` does not exist.`)
    return operations[operator](left, right)
  } else {
    return Boolean(left)
  }
}

module.exports = async (context, opts) => {
  let success
  if (opts.hasOwnProperty('gates')) {
    // Either Array.some or Array.every
    const method = opts.every ? 'every' : 'some'
    success = opts.gates[method](gate => {
      const opts = context.getValuesFromContext(gate)
      return evaluate(opts)
    })
  } else {
    success = evaluate(opts)
  }

  if (opts.hasOwnProperty('else') && success === false) {
    if (Array.isArray(opts.else)) {
      await context.runActions(context.step.slug, context, opts.else)
    } else {
      await context.runAction(context, opts.else)
    }
  }

  return success
}
