import { Request, Response, Router } from 'express';

import { SendCompanyIntroductionMailService } from '../../../../services/Notification/Mail/sendCompanyIntroductionMail';
import { SendCompanyIntroductionMailServiceProps } from '../../../../interface/notification';

const MailRouter = Router();

MailRouter.post('/send', async function (req: Request, res: Response) {
  try {
    const body: SendCompanyIntroductionMailServiceProps = req.body;
    const sendMailHandler = new SendCompanyIntroductionMailService(body);
    await sendMailHandler.sendMail();
    return res.send({ success: true }).status(503);
  } catch (error) {
    console.log('Error in sendMail:', error);
    return res.send({ success: false, message: 'Internal Server problem' }).status(503);
  }
});

export default MailRouter;
