const express = require("express");
const cors  = require("cors")
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port  = process.env.PORT || 5000;

//user name = dbuser1
//pass = FGjLS0o7dMjEggtX



app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://dbuser1:FGjLS0o7dMjEggtX@cluster0.qsraj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
        await client.connect();
        const userCollection = client.db("foodExpress").collection("user");
        app.get ("/", (req, res)=>{
            res.send();
        });
    }
    finally{
       
    }
}

run().catch(console.dir);


app.get ("/", (req, res)=>{
    res.send("Running My Node CRUD Server");
});

app.listen(port, ()=>{
    console.log('CRUD Server is running');
});