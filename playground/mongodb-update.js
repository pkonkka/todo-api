// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('58e4dbf6b5956fc382eed53a')
    },
    {
        $set: {
            completed: true
        }
    },
    {
        returnOriginal: false
    })
    .then(result => {
        console.log(result);
    });

    // db.close();
});