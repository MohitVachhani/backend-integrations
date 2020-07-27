import { Router } from 'express';
import SpotifyRouter from './spotify';

const AuthRouter = Router();

AuthRouter.use('/spotify', SpotifyRouter);
export default AuthRouter;
