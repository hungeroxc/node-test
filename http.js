// 引入模块
const http = require('http')
const fs = require('fs')
const urlUtil = require('url')
const querystring = require('querystring')

const router = require('./httpRouter')
const handler = require('./httpHandler')

const handle = {}
handle['/'] = handler.handler.home
handle['/home'] = handler.handler.home
handle['/review'] = handler.handler.review
handle['/api/v1/records'] = handler.handler.api_record

const onRequest = (req, res) => {
    const method = req.method
    const url = urlUtil.parse(req.url).pathname
    let data = []
    req.on('error', err => {
        console.log(err)
    }).on('data', chunk => {
        data.push(chunk)
    }).on('end', () => {
        if(method === 'POST'){
            data = Buffer.concat(data).toString()
            router.route(url, handle, res, querystring.parse(data))
        } else {
            const params = urlUtil.parse(req.url, true).query
            console.log(params)
            router.route(url, handle, res, params)
        }
    })
    // const params = urlUtil.parse(req.url, true).query
    // router.route(url, handle, res, params)


}

// 创建服务器
const server = http.createServer(onRequest)

// 监听端口
server.listen(3000)