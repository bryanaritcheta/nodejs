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
    var myobj = [
        { name: 'John', address: 'Highway 71' },
        { name: 'Peter', address: 'Lowstreet 4' },
        { name: 'Amy', address: 'Apple st 652' },
        { name: 'Hannah', address: 'Mountain 21' },
        { name: 'Michael', address: 'Valley 345' },
        { name: 'Sandy', address: 'Ocean blvd 2' },
        { name: 'Betty', address: 'Green Grass 1' },
        { name: 'Richard', address: 'Sky st 331' },
        { name: 'Susan', address: 'One way 98' },
        { name: 'Vicky', address: 'Yellow Garden 2' },
        { name: 'Ben', address: 'Park Lane 38' },
        { name: 'William', address: 'Central st 954' },
        { name: 'Chuck', address: 'Main Road 989' },
        { name: 'Viola', address: 'Sideway 1633' }
    ];
    dbo.collection("customers").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});