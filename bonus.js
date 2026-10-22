
const http = require('http')

const hostname = '127.0.0.1'
const port = 3001

const ingredients = [
    { name: "Lemons", amount: 2, unit: "pieces" },
    { name: "Sugar", amount: 1, unit: "cup" },
    { name: "Flour", amount: 2, unit: "cups" },
    { name: "Butter", amount: 1, unit: "cup" },
    { name: "Eggs", amount: 3, unit: "pieces" }
]


const used = [false, false, false, false, false]

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    let result = ""

    if (used.every(value => value === true)) {
        result = "<h2>nothing left</h2>"
    } else {
      
        let index = Math.floor(Math.random() * ingredients.length)

     
        while (used[index]) {
            index = (index + 1) % ingredients.length
        }

     
        used[index] = true

        const ingredient = ingredients[index]

        result = `
            <h2>Lemon Bars Ingredients</h2>
            <p>Index: ${index}</p>
            <p>Ingredient: ${ingredient.name}</p>
            <p>Amount: ${ingredient.amount} ${ingredient.unit}</p>
        `
    }

    res.end(`
        <html>
        <head>
            <title>Lakshmi Tejaswini Davuluri - Lemon Bars</title>
        </head>
        <body>
            <h1>Lakshmi Tejaswini Davuluri lists an ingredient</h1>
            ${result}
        </body>
        </html>
    `)
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
