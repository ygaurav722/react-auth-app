const mailgun = require("mailgun-js");

const API_KEY = 'bb789f9ff236e4e014665bb3af71e3b5-381f2624-e6931535';
const DOMAIN = 'sandbox8f7423abf7174be382c39ff561fa69d8.mailgun.org';


export const sendEmail = ({ to, from, subject, text}) => {

    const mg = mailgun({apiKey: API_KEY, domain: DOMAIN});
    const data = { to, from, subject, text };
    mg.messages().send(data ,(error, body) =>{
        if(error) return console.log(err);
        else return console.log(body);
    });

};



