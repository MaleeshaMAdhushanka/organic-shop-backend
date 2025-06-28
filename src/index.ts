
import express, {Express, Request, Response} from "express";
import app from "./app";
//initialize the express app


//define the application port
const port = 3000;



//4 . Instract the express app  to
// to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);

})