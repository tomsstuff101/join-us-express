const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const {runQuery, addEmail} = require('./app')

const app = express()

// public static directory serve via 'use' a static 
// we need the absoulute path to the public user
app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get("/data", async (req,res) => {
    const data = await runQuery()

    // console.log(data[0].total)
    console.log(data)

    res.send({
        data: data[0].total
        // data: data
    })
})


app.post("/register", (req,res) => {
    addEmail(req.body.email)

    console.log(req.body)
    res.send("POST request to the homepage")
})

app.listen(3030, () => {
    console.log('listen to 3030')
    
})