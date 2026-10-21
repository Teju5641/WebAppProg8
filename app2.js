
const http = require('http')

const hostname = process.env.hostname || '127.0.0.1'
const port = process.env.port || 3001

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    res.write('<html>')
    res.write('<head>')
    res.write('<title>Places I Want to Visit</title>')
    res.write('</head>')
    res.write('<body>')

    res.write('<h1>Lakshmi Tejaswini Davuluri - Travel Table</h1>')
    res.write('<h2>Places I Want to Visit</h2>')

    res.write(`
        <table border="1">
            <tr>
                <th>City</th>
                <th>Reason</th>
                <th>Distance from Paris</th>
                <th>Travel Cost</th>
            </tr>
            <tr>
                <td>London</td>
                <td>I want to see Big Ben and London Bridge.</td>
                <td>About 214 miles</td>
                <td>$100</td>
            </tr>
            <tr>
                <td>Rome</td>
                <td>I want to visit the Colosseum.</td>
                <td>About 687 miles</td>
                <td>$150</td>
            </tr>
            <tr>
                <td>Seoul</td>
                <td>I want to visit N Seoul Tower.</td>
                <td>About 5,560 miles</td>
                <td>$700</td>
            </tr>
            <tr>
                <td>Tokyo</td>
                <td>I want to experience Japanese culture.</td>
                <td>About 6,040 miles</td>
                <td>$800</td>
            </tr>
        </table>
    `)

    res.end('</body></html>')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
