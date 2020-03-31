const sendgridapi = process.env.SENDGRIDAPI;
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(sendgridapi);

// sgMail.send({
//     to: "code.asg@protonmail.com",
//     from: "ashishboss9977@gmail.com",
//     subject: "This is Subject",
//     text: "Its a text"
// })

const sendWelcomemail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ashishboss9977@gmail.com',
        subject: "Welcome To the App",
        text: 'Welcome to the' + name + 'task manager app.',
    })
}

const sendCancelmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ashishboss9977@gmail.com',
        subject: "Cancelation of mail",
        text: "Its Sad that u leave us.Please reply us with reason for leaving"
    })

}

module.exports = {
    sendWelcomemail,
    sendCancelmail
}