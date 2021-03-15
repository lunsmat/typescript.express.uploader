import mongoose from 'mongoose';

const mongo_uri = process.env.NODE_ENV === 'test' ?
    process.env.MONGO_URI_TEST :
    process.env.MONGO_URI;

mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('🚀 Connected to database.');
});
