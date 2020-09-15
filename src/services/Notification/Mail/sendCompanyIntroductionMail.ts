import { SendCompanyIntroductionMailServiceProps } from '../../../interface/notification';
import { sendEmail } from './utils/sendEmail';

export class SendCompanyIntroductionMailService {
  private sendCompanyIntroductionMailServiceProps: SendCompanyIntroductionMailServiceProps;
  constructor(props: SendCompanyIntroductionMailServiceProps) {
    this.sendCompanyIntroductionMailServiceProps = props;
  }

  async sendMail(): Promise<void> {
    const { emailIds } = this.sendCompanyIntroductionMailServiceProps;
    console.log('emailIds:', emailIds);
    await sendEmail({ subject: 'Hello there', emailText: 'hey there', toAddress: emailIds[0] });
  }
}
