import express, {Express, Request, Response} from "express";
import productRoutes from "./routes/product.routes";
import contactRouter from "./routes/contact.routes";
import cors from "cors";
import authRoutes from "./routes/auth.routes.";
//Define the middleware
//Initialize the express app
const app:Express = express();

//Define the middlewares
// instruct to purse the request
//request payload datato be converted
// to json format
app.use(express.json());
const  allowedOrigins = ['http://localhost:5173'];

const corsOptions = {
    origin: (origin: string | undefined,
             callback: (err: Error | null,
                       allow?:boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
app.use(cors(corsOptions));

app.use("/api/auth", authRoutes)

// api/products routs
app.use("/api/products", productRoutes)

//api contacts routes
app.use("/api/contacts", contactRouter)

//define a simple http get req
// app.get('/', (req:Request, res:Response) => {
//     console.log(req.body);
//     res.send('Hello wrold 2 !');
// });

//Expert the app to use outside(in index.ts)
export  default app;