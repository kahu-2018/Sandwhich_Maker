var server = require('../server')
var request = require('supertest')
var cheerio = require('cheerio')

test('test suite works', function () {
  expect(true).toBe(true)
})

test('builder generates image', function (done) {
  request(server)
    .get('/builder')
    .end(function (err, res) {
      var expectedMinimumElementCount = 0
      var $ = cheerio.load(res.text)
      var actualElementCount = $('.topping').length

      console.log($('.topping').length)
      console.log('expected: ', typeof expectedMinimumElementCount)
      console.log('actual: ', typeof actualElementCount)

      expect(actualElementCount).toBeGreaterThan(expectedMinimumElementCount)
      done()
    })
})

// test('puppy images show', function (done) {
//   request(server)
//     .get('/puppies')
//     .end(function (err, res) {
//       var expectedMinimumElementCount = 0
//       var $ = cheerio.load(res.text)
//       var actualElementCount = $('.img-circle').length
//       expect(actualElementCount).toBeGreaterThan(expectedMinimumElementCount)
//       done()
//     })
// })