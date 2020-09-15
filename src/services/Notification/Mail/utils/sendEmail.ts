import sendgrid from '@sendgrid/mail';

export async function sendEmail({ subject, emailText, toAddress }): Promise<void> {
  const sendgridApiKey = process.env.SEND_GRID_API_KEY;
  console.log('sendgridApiKey', sendgridApiKey);
  sendgrid.setApiKey(sendgridApiKey);
  const fromAddress = 'Mohit Vachhani <mohitvachhani55@yopamil.com>';
  if (!toAddress) {
    throw new Error('MISSING: toAddress!');
  }
  const mailObj = {
    to: toAddress,
    from: fromAddress,
    cc: [],
    bcc: [],
    subject,
    html: emailText,
  };
  const result = await sendgrid.send(mailObj);
  console.log('result:', result);
}
