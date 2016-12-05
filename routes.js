var db = require('./db')

module.exports = {
  home: home,
  detail: details
}

function home (req, res) {
  var data = db.getHomeData()
  data.showList = req.query.showlist
  res.render('home', data)
}

function details (req, res){
  var data = db.getDetails(req.params.name)
  res.render('detail', data)
}
