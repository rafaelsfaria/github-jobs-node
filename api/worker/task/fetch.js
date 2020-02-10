const fetch = require('node-fetch');

fetchGithubJobs = async () => {
  const result = await fetch('https://api.github.com/users/github')
  const json = await result.json()
  return json
}

module.exports = fetchGithubJobs