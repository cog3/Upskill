const os = require('os')

// info about current user
const user = os.userInfo()
console.log(`The system uptime is ${os.uptime()} seconds.`)

