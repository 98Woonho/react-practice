const express = require('express')
const app = express()
const port = 4000
const db = require('./config/db.js')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('hello world!')
})

// http://localhost:4000/person
app.get('/person',(req,res)=>{
    db.query('select * from person',(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.send(err)
        }
    })
})

app.get('/person/:name',(req,res)=>{
    const name = req.params.name
    console.log(name)//이민호
    db.query(`select * from person where name='${name}'`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.send(err)
        }
    })
})

app.post('/person',(req,res)=>{
    console.log(req.body) // {name:'김철수',age:30,height:177.8}
    //const name=req.body.name;
    //const age=req.body.age;
    //const height=req.body.height;
    const {name,age,height}=req.body
    console.log(name)   
    console.log(age)   
    console.log(height)   
    
    db.query(`insert into person values('${name}',${age},${height})`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.send(err)
        }
    })
})

app.put('/person',(req,res)=>{
    console.log(req.body) // {name:'김철수',age:40}
    const {name,age}=req.body
    console.log(name)   
    console.log(age)   
    db.query(`update person set age=${age} where name='${name}'`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.send(err)
        }
    })
})

app.delete('/person',(req,res)=>{
    const name = req.params.name
    console.log(name)//이민호
    db.query(`delete from person where name='${name}'`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.send(err)
        }
    })
})

app.get('/search',(req,res)=>{
    const word = req.query.word
    console.log(word)//중
    db.query(`select * from person where name like '%${word}%'`,(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            res.send(err)
        }
    })
})

app.listen(port,()=>{
    console.log(`Server Started ${port}`)
})