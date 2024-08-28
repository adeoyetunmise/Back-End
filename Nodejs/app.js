// fs(fileSystem)
const fs = require("fs")

// create a new file 
// Synchronous
fs.writeFileSync("tena.txt", "Tenacious, how are you?");
console.log("creating");
console.log("created");

//  Add content to the file
fs.appendFileSync("tena.txt", "how far nah?")

// let data = fs.readFileSync("tena.txt");
// console.log(data.toString());

let data = fs.readFileSync("tena.txt", {encoding: "utf-8"}) //the same as toString()
console.log(data);

// to remove the file

fs.unlinkSync("tena.txt")

// Asynchronous

fs.writeFile("tena.py", name = "ayo", function(err){
    if (!err){
        console.log("File created successfuly");
        
    }
} )
console.log("This is sync");


fs.appendFile("tena.py", "ayo is a good boy", function(err){
    if(!err){
        console.log("File was append");
        
    }
} )

fs.readFile("tena.py", function(err, data){
    if(!err)

        console.log(data.toString());
        
})
