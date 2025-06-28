import express, {Express, Request, Response} from "express";

const app:Express = express();

//Define the middlewares
// instruct to purse the request
//request payload datato be converted
// to json format
app.use(express.json());

//define a simple http get req
app.get('/', (req:Request, res:Response) => {
    res.send('Hello wrold 2 !');
});

export  default app;