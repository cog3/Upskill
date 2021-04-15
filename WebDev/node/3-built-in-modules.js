// __dirname - path to current directory
// __filename - file name
// require - funtion to use modules (Vanilla JS)
// module - info about current module (file)
// process - info about environment

// in Node .. EVERY FILE IS A MODULE


// Modules

const names = require('./4-modules')
const hello = require('./5-utils')
const data = require('./6-alternative-syntax')
const sum = require('./7-mind-grenade') // the add function gets invoked because the require() will run whatever is in the file


console.log(names)
console.log(hello)
console.log(data)
console.log(data.item)
console.log(data.person)


hello('Hotep')
hello(names.chris)
hello(names.john)

