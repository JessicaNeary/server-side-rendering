var db = require('./db')

module.exports = {
  home: home,
  detail: details
}

function home (req, res) {
  db.getData(function (err, repo){
    var data = {
      title: 'Awesome title',
      headerText: 'Welcome to Awesome',
      repoList: repo,
      author: repo[0].owner.login
    }
    console.log(data)
    //data.showList = req.query.showlist
    res.render('home', data)
  })

}




function details (req, res){
  var data = db.getDetails(req.params.name)
  res.render('detail', data)
}
