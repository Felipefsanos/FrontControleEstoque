import express, { static } from 'express'
import { join } from 'path'

const port = process.env.PORT || 3000
const app = express()
 
app.use(static(join(__dirname, 'dist', 'my-app'
)))
 
app.get('/', function (req, res) {
   res.sendFile(join(__dirname, 'dist', 'my-app', 'index.html'))
})
 
app.listen(port)