import express, { NextFunction, Request, Response } from 'express';
import logMiddleware from './src/middlewares/logMiddleware';
import bodyParser from 'body-parser';
import multer from 'multer';
import { routes } from './src/routes/routes.index';
require('dotenv').config();

const app               = express();
const upload            = multer({ dest: 'uploads/' });
const port              = process.env.PORT;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // To parse x-www-form-urlencoded
app.use(bodyParser.raw());
app.use(upload.any());  // Middleware multer to parse multipart/form-data

app.use(logMiddleware);
app.use("/", routes);

app.listen(port, () => console.log("Serveur démarré sur le port :", port));

app.get("/", (req: Request, res: Response) => res.status(200).json({"message": "Welcome to the OpenDex api"}));

app.use((req: Request, res: Response, next: NextFunction) => res.status(404).json({ error: "ressource not found" }));