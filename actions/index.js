const actions = {
  assignRegistrant: require('./assignRegistrant'),
  closeIssue: require('./closeIssue'),
  createFile: require('./createFile'),
  createIssue: require('./createIssue'),
  createLabel: require('./createLabel'),
  createProjectBoard: require('./createProjectBoard'),
  createPullRequest: require('./createPullRequest'),
  createPullRequestComment: require('./createPullRequestComment'),
  createReview: require('./createReview'),
  createStatus: require('./createStatus'),
  deleteBranch: require('./deleteBranch'),
  findInTree: require('./findInTree'),
  gate: require('./gate'),
  getFileContents: require('./getFileContents'),
  getIssue: require('./getIssue'),
  getPullRequest: require('./getPullRequest'),
  getTree: require('./getTree'),
  htmlContainsTag: require('./htmlContainsTag'),
  mergeBranch: require('./mergeBranch'),
  mergePullRequest: require('./mergePullRequest'),
  octokit: require('./octokit'),
  removeBranchProtection: require('./removeBranchProtection'),
  requestReviewFromRegistrant: require('./requestReviewFromRegistrant'),
  respond: require('./respond'),
  updateBranchProtection: require('./updateBranchProtection')
}

for (const action in actions) {
  actions[action].schema = require(`./${action}/schema`)
}

module.exports = actions
