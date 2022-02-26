const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://MongoDBtest:BD2.L1@cluster0.jfspj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(db => console.log('DB succesfully connected'))
    .catch((err) => console.error(err));