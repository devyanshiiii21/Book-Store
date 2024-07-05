import express from "express";
import { PORT, MONGO_URI } from './config.js'
import mongoose from "mongoose"

const app = express();

app.get('/', (request, response) => {
    // console.log(request);
    return response.status(234).send("Hello")
});

mongoose.connect(MONGO_URI).then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to PORT : ${PORT}`);
    });

}).catch((error) => {
    console.log(error);
})