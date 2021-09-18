var http = require("http")
var fs = require("fs")
var url = require("url")
var uc = require("upper-case")

http.createServer((req, res) => {
    var q = url.parse(req.url, true)
    var filename = "." + q.pathname
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" })
            return res.end(uc.upperCase("404 not found"))
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" })
            return res.end(data)
        }
    })
}).listen(8080)