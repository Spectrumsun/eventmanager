import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

require('dotenv').config();

// add the config for the mail
const transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

// convert the templete for the email to html
const handlebarsOptions = {
  viewEngine: 'handlebars',
  viewPath: path.join(__dirname, '../../template/email'),
  extName: '.html'
};


// send the mail for the server
const transports = (mailOptions) => {
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
};

transport.use('compile', hbs(handlebarsOptions));

// mail for rsestpassword
exports.resetpassword = (options) => {
  const mailOptions = {
    from: 'Event Manager <noreply@eventmanager.com>',
    to: options.user.email,
    subject: options.subject,
    template: 'passwordreset',
    context: {
      url: options.resetURL,
      name: options.name
    }
  };
  transports(mailOptions);
};

// semd the mail verification
exports.emailVerfication = (options) => {
  const mailOptions = {
    from: 'Event Manager <noreply@eventmanager.com>',
    to: options.user.email,
    subject: options.subject,
    template: 'emailverification',
    context: {
      url: options.emailVerfication,
      name: options.name
    }
  };
  transports(mailOptions);
};
