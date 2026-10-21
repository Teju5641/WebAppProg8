
const http = require('http')

const hostname = process.env.hostname || '127.0.0.1'
const port = process.env.port || 3001

const server = http.createServer((req, res) => {
    console.log("Request received")
    console.log(req.url)

    const fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams

    console.log("Queries: " + search_params)

    if (req.method === 'GET') {

   
        const x = Number(search_params.get("x"))
        const y = Number(search_params.get("y"))

     
        const result = Math.atan2(x, y)

        console.log(`Math.atan2(${x}, ${y}) is ${result}`)

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.setHeader('Access-Control-Allow-Origin', '*')

        // Send the result
        res.end(`Math.atan2(${x}, ${y}) is ${result}`)

    } else {
        console.log("Status 404")
        res.statusCode = 404
        res.end()
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
