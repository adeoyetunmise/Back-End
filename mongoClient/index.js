const express = require("express");
const mongodb = require("mongodb");

const app = express();

// Connection URL.
const connectionURL = "mongodb://localhost:27017"

// Connection to local database.
const client = new mongodb.MongoClient(connectionURL);

client
    .connect() // attempt to connect to the database
    .then(() => console.log("Database connection successful"))
    .catch((error) => console.log(error));


    const db = client.db("schoolDB"); // creating database.
    const student = db.collection("student") // collection inside database.

// setting up server
app.listen(8572, () => {
    console.log("Server is running on port 8572");
});