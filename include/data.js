const fs = require('fs')

const data = fs.readFileSync('data.json')

module.exports = JSON.parse(data)

