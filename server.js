const express = require('express')
const path = require('path')

const app = express()

// public static directory serve via 'use' a static 
// we need the absoulute path to the public user
app.use(express.static(path.join(__dirname, "public")))


app.listen(3030, () => {
    console.log('listen to 3030')
    
})