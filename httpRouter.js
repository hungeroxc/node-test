const fs = require('fs')

function route(url, handle, res, query) {
    if(typeof handle[url] === 'function') {
        handle[url](res, query)
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/review.html', 'utf8')
        .pipe(res)
    }
}

module.exports.route = route