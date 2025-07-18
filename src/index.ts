
import express, {Express, Request, Response} from "express";
import app from "./app";
//initialize the express app

import dotenv from "dotenv";
import DBConnection from "./db/DbConnection";


dotenv.config(); // load all environment variables from .env file- properties

//define the application port
const port = process.env.PORT || 3000; //access the  port  // by default 3000

DBConnection().then(result => console.log(result));

//4 . Instract the express app  to
// to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);

});