const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Pet_Shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB connection established!!'))
    .catch((err) => console.log('Something went wrong!!', err));