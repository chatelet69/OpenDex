import express from 'express';
import logMiddleware from './src/middlewares/logMiddleware';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import multer from 'multer';

const app               = express();
const routesPath        = path.join(__dirname, './src/routes');
const upload            = multer({ dest: 'uploads/' });

require('dotenv').config();
const port              = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // To parse x-www-form-urlencoded
app.use(bodyParser.raw());
app.use(upload.any());  // Middleware multer to parse multipart/form-data

app.use(logMiddleware);

// Browse the routes directory to load each route file
fs.readdirSync(routesPath).forEach(file => {
    if (file.endsWith('.ts')) {
        const route = require(path.join(routesPath, file));
        app.use(route);
    }
});

app.listen(port, () => console.log("Serveur démarré sur le port :", port));

app.get("/", (req, res) => res.status(200).json({"message": "Welcome to the OpenDex api"}));

app.use((req, res, next) => res.status(404).json({ error: "ressource not found" }));