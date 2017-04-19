const request = require('request')
const getStdin = require('get-stdin')

process.stdin.setEncoding('utf8')

getStdin().then(url => {
  url = url.trim()
  request.post('http://subr.pw/api/shorten', {
    form: { url: url }
  }, function(err, httpResponse, body) {
    body = JSON.parse(body)

    if (err) {
      console.log(err)
    } else {
      if (!body.status) {
        console.log(body.message)
      } else {
        console.log(body.shortlink)
      }
    }
  })
})