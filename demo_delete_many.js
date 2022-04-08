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
    var myquery = { address: /^A/ };
    dbo.collection("customers").deleteMany(myquery, function(err, obj) {
        if (err) throw err;
        // console.log(obj.result.n + " document(s) deleted");
        console.log(obj.deletedCount + " document(s) deleted");
        db.close();
    });
});