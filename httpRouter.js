function route(url, handle, res) {
    if(typeof handle[url] === 'function') {
        handle[url](res)
    } else {
        console.log('404')
    }
}

module.exports.route = route