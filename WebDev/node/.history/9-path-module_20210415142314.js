const path = require('path')

const pathSeperator = path.sep
console.log(pathSeperator)

const filePath = path.join('/content', '/subfolder', 'test.txt')
console.log(filePath)

const baseName = path.basename(filePath)
console.log(baseName)

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolutePath)