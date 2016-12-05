module.exports = {
  getHomeData: getHomeData,
  getDetails: getDetails
}

var repos = require('./github.js')

function getHomeData () {
  return {
    title: 'Awesome title',
    headerText: 'Welcome to Awesome',
    repoList: repos
  }
}

function getDetails (name){
  var results = repos.filter(function (repo){
    return repo.name === name
  })
  return results[0]
}
