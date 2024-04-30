const express = require('express')
const app = express()
const port = 4000
const db = require('./config/db.js')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/search/:name', (req, res) => {
    const name = req.params.name
    console.log(name)
    db.query(`select * from movie where name like '%${name}%`, (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.send(err)
        }
    })
})

app.post('/movie', (req, res) => {
    const name = req.body

    db.query(`insert into movie values('${name}')`, (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.send(err)
        }
    })
})

app.listen(port,()=>{
    console.log(`Server Started ${port}`)
})