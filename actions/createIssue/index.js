module.exports = async (context, opts) => {
  const issue = await context.github.issues.create(context.repo({
    title: opts.title,
    body: await context.fromFile(opts.body, opts.data)
  }))

  if (opts.hasOwnProperty('comments')) {
    for (const comment of opts.comments) {
      await context.github.issues.createComment(context.repo({
        number: issue.data.number,
        body: await context.fromFile(comment, opts.data)
      }))
    }
  }

  return issue
}
