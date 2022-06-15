const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient("mongodb://localhost:27017/");
mongoClient.connect(function (err, client) {
    const db = client.db("score");
    const collection = db.collection("users");
    collection.countDocuments(function(err, result){

        if(err){
            return console.log(err);
        }
        console.log(`В коллекции users ${result} документов`);
        client.close();
    });
})