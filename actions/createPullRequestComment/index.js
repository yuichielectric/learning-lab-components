// - type: createPullRequestComment
//   file: game.js
//   body: suggested-change.md
//   position: 5

module.exports = async (context, opts) => {
  let number, sha
  if (opts.hasOwnProperty('pullRequest')) {
    if (typeof opts.pullRequest === 'string') {
      const { owner, repo } = context.repo()
      const pullRequests = await context.github.search.issues({
        q: `in:title is:pr ${opts.pullRequest} repo:${owner}/${repo}`
      })
      const pullRequest = pullRequests.data.items.find(i => i.title === opts.pullRequest)
      number = pullRequest.number
      sha = pullRequest.head.sha
    } else if (typeof opts.pullRequest === 'number') {
      number = opts.pullRequest
    }
  } else {
    number = (context.payload.pull_request || context.payload).number
  }

  const params = context.repo({
    number,
    body: await context.fromFile(opts.body, opts.data),
    path: opts.file,
    position: opts.position,
    commit_id: sha || context.payload.pull_request.head.sha
  })

  return context.github.pullRequests.createComment(params)
}
