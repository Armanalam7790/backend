let mongoose = require('mongoose');

let connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/arman');
        console.log('mongodb connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;