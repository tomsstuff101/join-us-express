const express = require('express')
const path = require('path')
const {runQuery, addEmail} = require('./app')

const app = express()

// public static directory serve via 'use' a static 
// we need the absoulute path to the public user
app.use(express.static(path.join(__dirname, "public")))


app.get("/data", async (req,res) => {
    const data = await runQuery()

    // console.log(data[0].total)
    console.log(data)

    res.send({
        // data: data[0].total
        data: data
    })
})

app.listen(3030, () => {
    console.log('listen to 3030')
    
})