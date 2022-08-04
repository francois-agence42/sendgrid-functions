const client = require('@sendgrid/mail');
const {
  SENDGRID_API_KEY,
  SENDGRID_FROM_EMAIL,
} = process.env;

exports.handler = async function (event, context, callback) {
const { message, senderEmail, senderName } = JSON.parse(event.body);
  client.setApiKey(SENDGRID_API_KEY);

  const data = {
    to: 'f.parrou@agence42.fr',
    from: SENDGRID_FROM_EMAIL,
    subject: 'Bonjour de sendgrid',
    html: message,
  };

  try {
    console.log('Sending email...');
    await client.send(data);
    return {
      statusCode: 200,
      body: 'Message sent',
    };
  } catch (err) {
    console.log('Error sending email', err);
    return {
      statusCode: err.code,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};


// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// exports.handler = async function (event, context) {
//     console.log(sgMail)
//     const msg = {
//         to: 'f.parrou@agence42.fr',
//         from: 'test@example.com',
//         subject: 'Sending with SendGrid is Fun',
//         text: 'and easy to do anywhere, even with Node.js',
//         html: `<strong>Good</strong>`,
//       }
//     sgMail
//       .send(msg)
//       .then(() => {
//         console.log('Email sent')
//       })
//       .then(() => {
//         return {
//             statusCode: 200,
//             body: JSON.stringify('Email sent successfully')
//         };
//       })
//       .catch((error) => {
//         console.error(error)
//         // return {
//         //     statusCode: error.response.statusCode,
//         //     body: JSON.stringify({ message: error.message }),
//         //   };
//       })
//   };