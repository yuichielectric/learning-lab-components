const Context = require('../../context')

module.exports = (payload, github) => {
  const context = new Context(
    {
      event: {
        payload: {
          repository: { owner: { login: 'JasonEtco' }, name: 'example' },
          ...payload
        }
      },
      github: {
        hook: { before: jest.fn() },
        ...github
      },
      log: {
        info: jest.fn(),
        error: jest.fn(),
        debug: jest.fn(),
        child: function () {
          return this
        }
      }
    },
    {
      user: { login: 'JasonEtco' },
      step: { slug: 'my-step' },
      registration: { id: 123 }
    }
  )
  context.preferences = null
  context.fromFile = jest.fn(f => f)
  return context
}
