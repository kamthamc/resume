workflow "Publish" {
  on = "push"
  resolves = ["Release"]
}

action "PR Merges" {
  uses = "actions/bin/filter@master"
  args = "merged true"
}

action "Release" {
  uses = "actions/npm@master"
  needs = ["PR Merges"]
  secrets = ["GITHUB_TOKEN"]
  runs = "make release-ci"
}
