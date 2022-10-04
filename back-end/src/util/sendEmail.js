const mailgun = require("mailgun-js");

export const sendEmail = ({ to, from, subject, text}) => {

    const mg = mailgun({apiKey: process.env.API_KEY, domain: process.env.DOMAIN});
    const data = { to, from, subject, text };
    mg.messages().send(data ,(error, body) =>{
        if(error) return console.log(err);
        else return console.log(body);
    });

};



