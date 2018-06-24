const fs = require('fs')

// 读取流
const content = fs.createReadStream(__dirname + '/fs.txt')
// 写入流
const write = fs.createWriteStream(__dirname + '/fs1.txt')

// const writeData = 'hello world'
// write.write(writeData, 'utf-8')
// write.end()
// write.on('finish', () => {
//     console.log('成功')
// })

// content.setEncoding('utf-8')

// let data = ''

// content.on('data', chunk => {
//     data = data + chunk
//     // 流写入操作
//     write.write(chunk)
// })

// pipe操作
content.pipe(write)



