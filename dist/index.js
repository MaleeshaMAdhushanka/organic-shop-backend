"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//initialize the express app
const app = (0, express_1.default)();
//define the application port
const port = 3000;
//define a simple http get req
app.get('/', (req, res) => {
    res.send('Hello test 1!');
});
//4 . Instract the express app  to
// to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
