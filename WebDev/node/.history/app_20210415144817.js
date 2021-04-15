const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'UTF8')
const second = readFileSync('./content/second.txt', 'UTF8')

console.log(first)
console.log(second)
