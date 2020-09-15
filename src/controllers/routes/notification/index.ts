import MailRouter from './mail';
import { Router } from 'express';

const NotificationRouter = Router();

NotificationRouter.use('/mail', MailRouter);
export default NotificationRouter;
