const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.handler = async function (event, context) {
    const msg = {
        to: 'f.parrou@agence42.fr',
        from: 'test@example.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: `<strong>Good</strong>`,
      }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
        return {
            statusCode: 200,
        };
      })
      .catch((error) => {
        console.error(error)
        // return {
        //     statusCode: error.response.statusCode,
        //     body: JSON.stringify({ message: error.message }),
        //   };
      })
  };