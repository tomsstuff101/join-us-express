const faker = require("faker")
const mysql = require("mysql")
const { promisify } = require("util")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password1",
    database: "joinus"
})

const promisifiedQuery = promisify(connection.query).bind(connection)



const runQuery = async () => {
    try{
        // wait for the promise to be handled before trying to 
        let data = await promisifiedQuery('SELECT * FROM USERS')
        // let data = await promisifiedQuery(queryString)
        // console.log(data)
        return(data)
    }
    catch(error){
        console.log(error.sqlMessage)
    }
    connection.end()
}



// const bulkAdd = () => {
//     let people = []
//     for (i=0; i < 500; i++){
//         people.push([faker.internet.email(), faker.date.past()])
//     }
//     return people
// }


const addEmail = async email => {
    try{
        // const queryStringAdd = `INSERT INTO users(email) VALUES('tom@appijumbo.com')` // simple first test
        // const queryStringAdd = `INSERT INTO users(email, created_at) VALUES ?`

        // let data = await promisifiedQuery(queryStringAdd, [bulkAdd()]) // only neede tjis for fakin data with faker
        const queryStringAdd = `INSERT INTO users(email) VALUES('${email}')`
        let data = await promisifiedQuery(queryStringAdd)
        // console.log(data)
        return(data)
    }
    catch(error){
        console.log(error.sqlMessage)
    }
}




addEmail()