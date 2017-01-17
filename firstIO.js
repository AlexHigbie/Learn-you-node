var fs = require('fs')

var doc = fs.readFileSync(process.argv[2])

var lines = doc.toString().split('\n').length-1
console.log(lines)
