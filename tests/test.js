var test = require('tape')
var request = require('supertest')
var cheerio = require('cheerio')

var server = require('../server.js')
var db = require('../db')

test('getDetails returns correct repo', function (t){
  var expected = 75149450
  var repo = db.getDetails('bowling-scorer')
  var actual = repo.id

  t.equal(expected, actual)
  t.end()
})

test('homepage has correct title', function(t){
  var expected = 'Welcome to Awesome'

  request(server)
  .get('/')
  .end(function (err, res){

    var $ = cheerio.load(res.text)
    var actual = $('h1').text()

    t.equals(actual, expected)
    t.end()
  })
})

test('details page has correct name', function(t) {
  var expected = 'bowling-scorer'

  request(server)
  .get('/details/bowling-scorer')
  .end(function (err, res){

    var $ = cheerio.load(res.text)
    var actual = $('div').text()


    t.ok(actual.includes(expected))
    t.end()

  })

})
