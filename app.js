const http = require('http')    
                                
const hostname = '127.0.0.1'    
const port = 3001               

const server =
  http.createServer(           
    (req,res)=> {              
      res.statusCode = 200     
      res.setHeader('Content-Type', 'text/plain') //Set the mime type
      res.end('A fun fact about me is that I love traveling and exploring new places!')    
    }                          
)

server.listen(port, hostname, () => {   
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})