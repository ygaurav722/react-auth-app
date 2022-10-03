import { sendEmail } from '../util/sendEmail';

export const testEmailRoute = {
    path: '/api/test-email',
    method: 'post',
    handler: async (req, res) => {
        try {
            await sendEmail({
                to: 'gauravyadavsmartboys+test1@gmail.com',
                from: 'gauravyadavsmartboys@gmail.com',
                subject: 'Does this work?',
                text: 'If you\'re reading this... yes!',
            });
            res.sendStatus(200);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}