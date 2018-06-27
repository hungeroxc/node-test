// 引入模块
const http = require('http')
const fs = require('fs')

const router = require('./httpRouter')
const handler = require('./httpHandler')

const handle = {}
handle['/'] = handler.handler.home
handle['/home'] = handler.handler.home
handle['/review'] = handler.handler.home
handle['/api/v1/records'] = handler.handler.home

const onRequest = (req, res) => {
    const url = req.url
    router.route(url, handle, res)

}

// 创建服务器
const server = http.createServer(onRequest)

// 监听端口
server.listen(3000)