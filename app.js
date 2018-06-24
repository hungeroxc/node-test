const events = require('events')
const util = require('util')

const Person = function(name) {
    this.name = name
}
util.inherits(Person, events.EventEmitter)

const xiaoming = new Person('xiaoming')
const lili = new Person('lili')
const lucy = new Person('lucy')

const person = [xiaoming, lili, lucy]

person.forEach(item => {
    item.on('speak', msg => {
        console.log(item.name + ' said: ' + msg)
    })
})

xiaoming.emit('speak', 'hi')
lili.emit('speak', 'hi')
lucy.emit('speak', 'hi')

// const myEmitter = new events.EventEmitter()

// myEmitter.on('someEvent', msg => {
//     console.log(msg)
// })

// myEmitter.emit('someEvent', 'oxc')