import { Request, Response, NextFunction } from 'express';

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Requête reçue sur la route :", req.originalUrl, ":", req.method);
    next();
}

export default logMiddleware;