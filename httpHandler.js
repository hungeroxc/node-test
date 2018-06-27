const fs = require('fs')


function home(res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream(__dirname + '/index.html', 'utf8')
    .pipe(res)
}

function review(res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.createReadStream(__dirname + '/review.html', 'utf8')
    .pipe(res)
}

function api_record(res) {
    res.writeHead(200, {'Content-Type': 'application/json'})
    const json = {
        name: 'oxc'
    }
    res.end(JSON.stringify(json))
}

module.exports.handler = {
    home,
    review,
    api_record
}