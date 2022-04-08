require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');

const mongousr = process.env.mongouser;
const mongopw = process.env.mongopassword;
const mongocluster = process.env.mongocluster;
const mongodb = process.env.mongodb;

const uri = `mongodb+srv://${mongousr}:${mongopw}@${mongocluster}/${mongodb}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
    if (err) throw err;
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log("Database created!");
    client.close();
});