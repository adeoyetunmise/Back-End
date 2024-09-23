// // console.log("welcome");

// const fs = require("fs")

// // const msg = "Hello, this is a sample message"

// // fs.writeFile("info.txt", msg, (err) =>{
// //     err? console.log(err) : console.log("file created successfully");
    
// // })

// // to read the content of the file
// fs.readFile('info.txt', (err, data) =>{
//     err ? console.log(err) : console.log(data.toString());
    
// })


import express from 'express'
import dotenv from 'dotenv'
import studentRouter from './routes/studentsRoutes.js'
// this is used to connect to the database
import mongoose from 'mongoose'

dotenv.config()

const app = express()

// this helps to know which form we want our info to display
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api', studentRouter)

app.get('/', (req, res) => {
    res.send('This is our page')
})

app.get('/about', (req, res) => {
    res.json({name:'Tunmise',
            age: 20,
            country: "Nigeria",
            complexion: "Fair"
    })
})

app.post('/', (req, res) => {
    const {name, message} = req.body

    res.json({name, message})
})

const PORT = process.env.PORT

app.listen(PORT, (err) =>{
    console.log('listening at '+ PORT);
    
})

// to connect to our database using promise

mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log('connected to database');
    
})
.catch((err) =>{
    console.log(err);
    
})