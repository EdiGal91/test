const mongoose = require('mongoose');
const { DATABASE_URL } = require('../config');

exports.connect = async function () {
    await mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).catch(err => console.error(err));
    
    const isConnected = mongoose.connection.readyState === 1;
    return isConnected;
}

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('connection disconnected through app termination');
        process.exit(0);
    });
}); 