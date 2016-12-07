var path = require('path')
var fs = require('fs')

module.exports = {
  getHomeData: getHomeData,
  getDetails: getDetails,
  getData: getData
}

var repos = {}
var dataPath = path.join(__dirname, 'github.json')

function getData(callback){
  fs.readFile(dataPath, function(err, data){
    if(err){
      return console.error(err)
    }
    //console.log('Data:',data.toString())
    var processedData = data.toString()
    processedData = JSON.parse(processedData)
    callback(null, processedData)
  })
}

// function passData(err, repos){
//   return repos
// }

function getHomeData (err, repo) {
  return {
    title: 'Awesome title',
    headerText: 'Welcome to Awesome',
    author: repo[0].owner.login,
    repoList: repo
  }
}

function getDetails (name){
  repos = getData(passData)
  var results = repos.filter(function (repo){
    return repo.name === name
  })
  return results[0]
}
