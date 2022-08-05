const client = require('@sendgrid/mail');
const {
  SENDGRID_API_KEY,
  SENDGRID_FROM_EMAIL,
} = process.env;

exports.handler = async function (event, context, callback) {
  console.log(event);
  const form = JSON.parse(event.body);
  client.setApiKey(SENDGRID_API_KEY);

  const data = {
    to: 'f.parrou@agence42.fr',
    from: form.email,
    subject: `Message de ${form.firstname} ${form.lastname}`,
    html: `<!doctype html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <title> ${form.formName} </title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
    #outlook a{padding:0;}body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}table,td{border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;}img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;}p{display:block;margin:0;}
    </style>
    <!--[if mso]> <noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
    <![endif]-->
    <!--[if lte mso 11]>
    <style type="text/css">
    .ogf{width:100% !important;}
    </style>
    <![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Inter:700,600,400" rel="stylesheet" type="text/css">
    <style type="text/css">
    
    </style>
    <!--<![endif]-->
    <style type="text/css">
    @media only screen and (min-width:599px){.xc568{width:568px!important;max-width:568px;}.xc536{width:536px!important;max-width:536px;}}
    </style>
    <style media="screen and (min-width:599px)">.moz-text-html .xc568{width:568px!important;max-width:568px;}.moz-text-html .xc536{width:536px!important;max-width:536px;}
    </style>
    <style type="text/css">
    @media only screen and (max-width:599px){table.fwm{width:100%!important;}td.fwm{width:auto!important;}}
    </style>
    <style type="text/css">
    u+.emailify a,#MessageViewBody a,a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important;}span.MsoHyperlink{mso-style-priority:99;color:inherit;}span.MsoHyperlinkFollowed{mso-style-priority:99;color:inherit;}u+.emailify .glist{margin-left:0!important;}
    @media only screen and (max-width:599px){.emailify{height:100%!important;margin:0!important;padding:0!important;width:100%!important;}u+.emailify .glist{margin-left:25px!important;}td.x{padding-left:0!important;padding-right:0!important;}.fwm img{max-width:100%!important;height:auto!important;}td.stk{border:0!important;}br.sb{display:none!important;}.thd-1 .i-thumbnail{display:inline-block!important;height:auto!important;overflow:hidden!important;}.hd-1{display:block!important;height:auto!important;overflow:visible!important;}.ht-1{display:table!important;height:auto!important;overflow:visible!important;}.hr-1{display:table-row!important;height:auto!important;overflow:visible!important;}.hc-1{display:table-cell!important;height:auto!important;overflow:visible!important;}div.r.pr-16>table>tbody>tr>td,div.r.pr-16>div>table>tbody>tr>td{padding-right:16px!important}div.r.pl-16>table>tbody>tr>td,div.r.pl-16>div>table>tbody>tr>td{padding-left:16px!important}}
    </style>
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <!--[if gte mso 9]>
    <style>li{text-indent:-1em;}
    </style>
    <![endif]-->
    </head>
    <body link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;word-spacing:normal;background-color:#e5e5e5;"><div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;"> preview text </div><div class="bg " style="background-color:#e5e5e5;">
    <!--[if mso | IE]>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" style="width:600px;" width="600" bgcolor="#fffffe"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
    <![endif]--><div class="r pr-16 pl-16 " style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
    <!--[if mso | IE]>
    <table border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:568px;">
    <![endif]--><div class="xc568 ogf c " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
    <table border="0" cellpadding="0" cellspacing="0" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="left" class="i " style="font-size:0;padding:0;word-break:break-word;">
    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;"><tbody><tr><td style="width:74px;"> <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_244_67)">
    <path d="M3.65623 11.2095H0.0839844V11.2124H3.65623V11.2095Z" fill="#141B56"/>
    <path d="M14.7798 13.7021C14.8121 13.1772 14.8413 12.7191 14.8413 12.3179C14.8849 11.3419 14.7263 10.3675 14.3755 9.45578C14.0246 8.54405 13.4891 7.71464 12.8025 7.01969C12.1159 6.32473 11.2931 5.77934 10.3856 5.41747C9.4782 5.05559 8.50576 4.88519 7.52934 4.91696V8.08057H7.56234C8.47257 8.00952 9.37447 8.29745 10.0751 8.88278C10.7758 9.46811 11.2196 10.3044 11.3117 11.2127H0.0891435C0.0329206 11.6197 0.00485917 12.03 0.00515853 12.4409C-0.0324899 13.4409 0.136259 14.4379 0.500876 15.3698C0.865492 16.3017 1.41816 17.1486 2.12444 17.8575C2.83072 18.5665 3.67545 19.1222 4.606 19.4903C5.53655 19.8585 6.53295 20.0309 7.53309 19.9971C8.79914 20.0353 10.0548 19.7578 11.1868 19.1896C12.3188 18.6213 13.2915 17.7802 14.0172 16.7421L11.6176 14.9297C11.1616 15.5177 10.5741 15.9905 9.90226 16.3104C9.23044 16.6304 8.49299 16.7884 7.74905 16.7719C5.59693 16.7719 4.06121 15.6989 3.66003 13.7021H14.7798Z" fill="#141B56"/>
    <path d="M30.9704 19.6311H26.7622L23.2903 14.6822L19.7876 19.6311H15.6094L21.2619 11.7967L16.5617 5.28345H20.7707L23.2895 8.93897L25.8084 5.28345H30.0174L25.3172 11.7967L30.9704 19.6311Z" fill="#141B56"/>
    <path d="M41.139 5.28428V8.1105H38.0968V19.6312H34.5334V8.1105H31.9531V5.28428H34.5334V0H38.0968V5.28428H41.139Z" fill="#141B56"/>
    <path d="M53.89 5.40576L53.1836 8.78539C52.54 8.44385 51.8231 8.26376 51.0945 8.26054C48.7594 8.26054 47.4689 10.5955 47.4689 14.62V19.6275H43.8755V5.28054H47.4389V8.355C48.2075 5.95548 49.774 4.91385 51.5556 4.91385C52.3611 4.89713 53.1597 5.06542 53.89 5.40576V5.40576Z" fill="#141B56"/>
    <path d="M66.7606 5.28428H70.3239V19.6312H66.7606V17.3882C66.2272 18.2019 65.497 18.868 64.6378 19.3244C63.7786 19.7808 62.818 20.013 61.8452 19.9994C58.0043 19.9994 54.9321 16.8957 54.9321 12.4415C54.9321 8.11041 57.8821 4.9154 61.9366 4.9154C62.8734 4.88123 63.8041 5.07924 64.6457 5.49188C65.4874 5.90452 66.2139 6.51884 66.7606 7.28028V5.28428ZM66.6983 12.4415C66.701 11.3352 66.2669 10.2725 65.4904 9.48443C64.714 8.69633 63.6578 8.24643 62.5515 8.23261C62.0078 8.23909 61.4707 8.35356 60.9716 8.56927C60.4724 8.78499 60.021 9.09763 59.6437 9.48919C59.2663 9.88075 58.9705 10.3435 58.7734 10.8503C58.5763 11.3571 58.4819 11.8979 58.4955 12.4415C58.4821 12.9891 58.5775 13.534 58.7762 14.0445C58.9749 14.5549 59.273 15.0208 59.6531 15.4151C60.0333 15.8095 60.488 16.1245 60.9908 16.3418C61.4936 16.5592 62.0346 16.6746 62.5823 16.6812C63.6899 16.6635 64.7452 16.2072 65.5169 15.4124C66.2885 14.6176 66.7134 13.5492 66.6983 12.4415V12.4415Z" fill="#141B56"/>
    <path d="M89.9543 12.4422C89.9543 17.0163 86.6669 20.0001 82.8883 20.0001C81.9686 20.0215 81.057 19.8237 80.2289 19.4228C79.4009 19.022 78.6803 18.4297 78.1266 17.695V19.6319H74.5625V0.161255H78.1259V7.18963C79.109 5.65394 81.1059 4.91683 82.919 4.91683C86.6984 4.91608 89.9543 7.83442 89.9543 12.4422ZM86.3909 12.4115C86.4041 11.8694 86.3091 11.3303 86.1114 10.8254C85.9138 10.3205 85.6175 9.85993 85.2399 9.47086C84.8622 9.08178 84.4108 8.77198 83.912 8.55936C83.4133 8.34674 82.8771 8.23561 82.3349 8.23258C81.2316 8.23932 80.1759 8.68275 79.3987 9.46591C78.6216 10.2491 78.1863 11.3082 78.1881 12.4115C78.1759 12.9652 78.2739 13.516 78.4764 14.0315C78.6789 14.547 78.9819 15.0169 79.3678 15.4142C79.7537 15.8115 80.2147 16.1281 80.7241 16.3456C81.2335 16.5631 81.781 16.6773 82.3349 16.6812C82.8814 16.6676 83.4199 16.5464 83.9196 16.3246C84.4193 16.1028 84.8704 15.7846 85.2471 15.3884C85.6238 14.9921 85.9187 14.5254 86.1149 14.0152C86.3112 13.5049 86.405 12.9611 86.3909 12.4146V12.4115Z" fill="#6E5AE2"/>
    <path d="M104.3 5.28421H107.865V19.6311H104.3V17.3882C103.767 18.202 103.037 18.8681 102.178 19.3245C101.318 19.7809 100.358 20.0131 99.3849 19.9993C95.5456 19.9993 92.4727 16.8956 92.4727 12.4415C92.4727 8.11033 95.4226 4.91532 99.4772 4.91532C100.414 4.88094 101.344 5.07878 102.186 5.49144C103.028 5.9041 103.754 6.51863 104.3 7.28021V5.28421ZM104.239 12.4415C104.241 11.3351 103.807 10.2725 103.031 9.48436C102.254 8.69625 101.198 8.24636 100.092 8.23253C99.5483 8.23901 99.0113 8.35348 98.5121 8.56919C98.0129 8.78491 97.5615 9.09755 97.1842 9.48912C96.8069 9.88068 96.5111 10.3434 96.314 10.8502C96.1169 11.357 96.0224 11.8979 96.036 12.4415C96.0226 12.989 96.118 13.5338 96.3166 14.0442C96.5153 14.5546 96.8133 15.0205 97.1934 15.4149C97.5735 15.8092 98.0281 16.1242 98.5308 16.3416C99.0335 16.5589 99.5744 16.6744 100.122 16.6812C101.23 16.6636 102.285 16.2073 103.057 15.4125C103.829 14.6177 104.254 13.5492 104.239 12.4415V12.4415Z" fill="#6E5AE2"/>
    <path d="M120 5.28416V8.11038H116.958V19.6311H113.394V8.11038H110.814V5.28416H113.394V-0.00012207H116.958V5.28416H120Z" fill="#6E5AE2"/>
    <path d="M0.695801 6.96915C0.696716 6.6656 0.758198 6.36534 0.876632 6.08584C0.995065 5.80634 1.16807 5.55328 1.38553 5.34148C1.60299 5.12968 1.86053 4.96335 2.14305 4.85232C2.42558 4.7413 2.72741 4.6878 3.03089 4.69488C3.33668 4.68466 3.64143 4.73585 3.92713 4.84536C4.21282 4.95488 4.47367 5.12051 4.69427 5.33251C4.91488 5.54451 5.09077 5.7985 5.21155 6.07961C5.33233 6.36072 5.39555 6.6632 5.39748 6.96915C5.39545 7.275 5.33215 7.57733 5.21132 7.85831C5.09049 8.13929 4.91457 8.39319 4.69396 8.60505C4.47336 8.81691 4.21254 8.98245 3.9269 9.09183C3.64126 9.20121 3.33659 9.25227 3.03089 9.24195C2.72754 9.24903 2.42582 9.19562 2.1434 9.08469C1.86097 8.97376 1.60351 8.80753 1.38607 8.5959C1.16863 8.38426 0.995589 8.13141 0.877066 7.85209C0.758544 7.57277 0.696915 7.27257 0.695801 6.96915V6.96915Z" fill="#6E5AE2"/>
    </g>
    <defs>
    <clipPath id="clip0_244_67">
    <rect width="120" height="20" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
    </td></tr></tbody></table>
    </td></tr></tbody></table></div>
    <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
    </td></tr></tbody></table></div>
    <!--[if mso | IE]>
    </td></tr></table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" style="width:600px;" width="600" bgcolor="#fffffe"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
    <![endif]--><div class="r pr-16 pl-16 " style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:32px 32px 32px 32px;text-align:left;">
    <!--[if mso | IE]>
    <table border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:536px;">
    <![endif]--><div class="xc536 ogf c " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
    <table border="0" cellpadding="0" cellspacing="0" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="x " style="font-size:0;word-break:break-word;"><div style="text-align:center;"><p style="Margin:0;text-align:center;"><span style="font-size:28px;font-family:Inter,Arial,sans-serif;font-weight:700;color:#000000;line-height:32px;">Depuis le formulaire : ${form.formName}</span></p></div>
    </td></tr></tbody></table></div>
    <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
    </td></tr></tbody></table></div>
    <!--[if mso | IE]>
    </td></tr></table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" style="width:600px;" width="600" bgcolor="#fffffe"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
    <![endif]--><div class="r pr-16 pl-16 " style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:32px 32px 32px 32px;text-align:left;">
    <!--[if mso | IE]>
    <table border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:536px;">
    <![endif]--><div class="xc536 ogf c " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
    <table border="0" cellpadding="0" cellspacing="0" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="left" class="x m" style="font-size:0;padding-bottom:30px;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;"><span style="font-size:20px;font-family:Inter,Arial,sans-serif;font-weight:600;color:#000000;line-height:23px;">Nouveau message de ${form.firstname} ${form.lastname}</span></p></div>
    </td></tr><tr><td align="left" class="x " style="font-size:0;padding-bottom:0;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;"><span style="font-size:16px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#777777;line-height:24px;">${form.message}</span></p></div>
    </td></tr></tbody></table></div>
    <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
    </td></tr></tbody></table></div>
    <!--[if mso | IE]>
    </td></tr></table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" style="width:600px;" width="600" bgcolor="#6e5ae2"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
    <![endif]--><div class="r pr-16 pl-16 " style="background:#6e5ae2;background-color:#6e5ae2;margin:0px auto;max-width:600px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="background:#6e5ae2;background-color:#6e5ae2;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
    <!--[if mso | IE]>
    <table border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:568px;">
    <![endif]--><div class="xc568 ogf c " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
    <table border="0" cellpadding="0" cellspacing="0" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="x " style="font-size:0;word-break:break-word;"><div style="text-align:center;"><p style="Margin:0;text-align:center;"><span style="font-size:13px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#ffffff;line-height:16px;">extrabat.com</span></p></div>
    </td></tr></tbody></table></div>
    <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
    </td></tr></tbody></table></div>
    <!--[if mso | IE]>
    </td></tr></table>
    <![endif]--></div>
    </body>
    </html>`,
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