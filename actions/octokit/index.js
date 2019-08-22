const ROUTES = require('@octokit/rest/lib/routes')
const get = require('get-value')
const has = require('has')
const allowedMethods = require('./allowed-methods.json')

module.exports = async (context, opts) => {
  const { method, requester, ...data } = opts

  const client = opts.requester && opts.requester === 'user' ? context.user.client : context.github
  const octokitMethod = get(client, method)
  if (!octokitMethod) throw new Error(`Octokit method \`${method}\` does not exist.`)

  // Only allow specific methods
  if (!allowedMethods.includes(method)) throw new Error(`Octokit method \`${method}\` is not allowed.`)

  // Validate the provided data
  let route = get(ROUTES, method)

  // If the method is deprecated, it will alias a different method
  if (route.alias) {
    route = get(ROUTES, route.alias)
  }

  const required = Object.keys(route.params).filter(p => route.params[p].required)
  const requiredButMissingParams = required.filter(p => !has(data, p))

  if (requiredButMissingParams.length > 0) {
    throw new Error(`Octokit method \`${method}\` requires the following parameters: ${requiredButMissingParams.join(', ')}`)
  }

  return octokitMethod(data)
}
