require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');

const mongousr = process.env.mongouser;
const mongopw = process.env.mongopassword;
const mongocluster = process.env.mongocluster;
const mongodb = process.env.mongodb;

const uri = `mongodb+srv://${mongousr}:${mongopw}@${mongocluster}/${mongodb}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: "Valley 345" };
    var newvalues = { $set: { address: "Canyon 123" } };
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});