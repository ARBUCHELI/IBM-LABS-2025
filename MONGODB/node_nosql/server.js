try {
    const { MongoClient } = require('mongodb');
    const url = 'mongodb://localhost:27017/mydatabase';
    const options = { useNewUrlParser: true };

    MongoClient.connect(url, options, (err, client) => {
        if (err) {
            console.log('Failed to connect to MongoDB:', err);
        }
        return;
    })

    console.log('Successful connection');
    client.close();
};