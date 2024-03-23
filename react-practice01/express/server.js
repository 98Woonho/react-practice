const express = require('express')
const app = express()
const port = 3001
const db = require('./config/db.js')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// 비밀번호 암호화
const bcrypt = require('bcrypt')

app.post('/user/join', (req,res) => {
    const {id, password} = req.body
    db.query(`select * from user where id='${id}'`, (err,data) => {
        if (!err) {
            if (data.length != 0) {
                res.send('FAILURE')
            } else {
                const hashedPassword = bcrypt.hashSync(password, 10);
                db.query(`insert into user values('${id}', '${hashedPassword}')`, (err, data) => {
                    if (!err) {
                        res.send('SUCCESS')
                    } else {
                        res.send(err)
                    }
                })
            }
        } else {
            res.send(err)
        }
    })
})

app.post('/user/login', (req,res) => {
    const {id, password} = req.body
    db.query(`select * from user where id='${id}'`, (err,data) => {
        if (!err) {
            if (data.length == 0 || !bcrypt.compareSync(password, data[0].password)) {
                res.send('FAILURE')
            } else {
                res.send('SUCCESS')
            }
        } else {
            res.send(err)
        }
    })
})


app.listen(port,()=>{
    console.log(`Server Started ${port}`)
})