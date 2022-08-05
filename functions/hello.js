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
    from: 'f.parrou@agence42.fr',
    subject: `Message de ${form.firstname} ${form.lastname}`,
    html: `<!doctype html>
    <html lang="fr" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <title>${form.formName}</title>
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
    @media only screen and (min-width:599px){.xc568{width:568px!important;max-width:568px;}.pc100{width:100%!important;max-width:100%;}.xc536{width:536px!important;max-width:536px;}}
    </style>
    <style media="screen and (min-width:599px)">.moz-text-html .xc568{width:568px!important;max-width:568px;}.moz-text-html .pc100{width:100%!important;max-width:100%;}.moz-text-html .xc536{width:536px!important;max-width:536px;}
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
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:31px 16px 16px 16px;text-align:left;">
    <!--[if mso | IE]>
    <table border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:568px;">
    <![endif]--><div class="xc568 ogf c " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
    <table border="0" cellpadding="0" cellspacing="0" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td class="" style="font-size:0;padding:0;word-break:break-word;">
    <!--[if mso | IE]>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:568px;" width="568"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
    <![endif]--><div class="" style="margin:0px auto;max-width:568px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0;padding:0;text-align:center;">
    <!--[if mso | IE]>
    <table border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:568px;">
    <![endif]--><div class="pc100 ogf" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;">
    <table border="0" cellpadding="0" cellspacing="0"  width="100%"><tbody><tr><td align="center" class="c " style="font-size:0;padding:0;word-break:break-word;">
    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;" class="fwm"><tbody><tr><td style="width:198px;" class="fwm">
    <svg width="198" height="33" viewBox="0 0 198 33" fill="none" xmlns="http://www.w3.org/2000/svg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;">
      <g clip-path="url(#clip0_247_6)">
      <path d="M6.03337 18.4956H0.13916V18.5005H6.03337V18.4956Z" fill="#141B56"/>
      <path d="M24.3867 22.6084C24.4399 21.7423 24.4882 20.9865 24.4882 20.3245C24.5601 18.7142 24.2985 17.1064 23.7196 15.6021C23.1407 14.0977 22.257 12.7292 21.1241 11.5825C19.9913 10.4358 18.6336 9.53593 17.1363 8.93884C15.639 8.34175 14.0345 8.06058 12.4234 8.113V13.333H12.4779C13.9797 13.2157 15.4679 13.6908 16.624 14.6566C17.7801 15.6224 18.5124 17.0022 18.6643 18.501H0.147087C0.054319 19.1725 0.00801763 19.8496 0.00851157 20.5275C-0.0536084 22.1775 0.224828 23.8226 0.826445 25.3602C1.42806 26.8979 2.33997 28.2952 3.50533 29.465C4.67068 30.6347 6.0645 31.5517 7.5999 32.1591C9.1353 32.7665 10.7794 33.0511 12.4296 32.9952C14.5186 33.0582 16.5904 32.6004 18.4582 31.6628C20.326 30.7251 21.931 29.3373 23.1284 27.6245L19.1691 24.6341C18.4166 25.6042 17.4472 26.3843 16.3387 26.9122C15.2302 27.4401 14.0134 27.7009 12.7859 27.6737C9.23493 27.6737 6.70099 25.9032 6.03904 22.6084H24.3867Z" fill="#141B56"/>
      <path d="M51.1011 32.3913H44.1575L38.4289 24.2256L32.6495 32.3913H25.7554L35.082 19.4645L27.3267 8.71765H34.2716L38.4276 14.7493L42.5837 8.71765H49.5285L41.7732 19.4645L51.1011 32.3913Z" fill="#141B56"/>
      <path d="M67.8799 8.71907V13.3823H62.8602V32.3915H56.9806V13.3823H52.7231V8.71907H56.9806V0H62.8602V8.71907H67.8799Z" fill="#141B56"/>
      <path d="M88.9185 8.91947L87.7529 14.4959C86.691 13.9323 85.5081 13.6352 84.3059 13.6299C80.453 13.6299 78.3236 17.4826 78.3236 24.1229V32.3853H72.3945V8.71286H78.2741V13.7857C79.5423 9.82651 82.127 8.10783 85.0668 8.10783C86.3959 8.08024 87.7136 8.35791 88.9185 8.91947V8.91947Z" fill="#141B56"/>
      <path d="M110.155 8.71902H116.035V32.3914H110.155V28.6906C109.275 30.0331 108.07 31.1321 106.653 31.8852C105.235 32.6383 103.65 33.0213 102.045 32.9989C95.7073 32.9989 90.6382 27.8778 90.6382 20.5285C90.6382 13.3821 95.5056 8.11036 102.196 8.11036C103.741 8.05398 105.277 8.3807 106.666 9.06156C108.054 9.74242 109.253 10.756 110.155 12.0124V8.71902ZM110.052 20.5285C110.057 18.703 109.341 16.9496 108.059 15.6493C106.778 14.3489 105.036 13.6066 103.21 13.5838C102.313 13.5944 101.427 13.7833 100.603 14.1392C99.7796 14.4952 99.0348 15.011 98.4122 15.6571C97.7896 16.3032 97.3016 17.0667 96.9763 17.903C96.6511 18.7392 96.4952 19.6315 96.5178 20.5285C96.4956 21.432 96.653 22.3311 96.9809 23.1734C97.3088 24.0156 97.8006 24.7842 98.4279 25.4349C99.0551 26.0856 99.8053 26.6054 100.635 26.964C101.465 27.3226 102.357 27.513 103.261 27.524C105.088 27.4947 106.83 26.7418 108.103 25.4304C109.376 24.119 110.077 22.3561 110.052 20.5285V20.5285Z" fill="#141B56"/>
      <path d="M148.424 20.5297C148.424 28.077 143 33.0001 136.765 33.0001C135.248 33.0356 133.744 32.7091 132.377 32.0477C131.011 31.3864 129.822 30.4091 128.909 29.1969V32.3927H123.028V0.266113H128.907V11.8629C130.529 9.32905 133.824 8.11282 136.816 8.11282C143.052 8.11158 148.424 12.9268 148.424 20.5297ZM142.545 20.479C142.566 19.5846 142.41 18.695 142.084 17.8619C141.757 17.0288 141.269 16.2689 140.645 15.627C140.022 14.985 139.278 14.4738 138.455 14.123C137.632 13.7722 136.747 13.5888 135.852 13.5838C134.032 13.5949 132.29 14.3266 131.008 15.6188C129.725 16.911 129.007 18.6586 129.01 20.479C128.99 21.3926 129.152 22.3014 129.486 23.152C129.82 24.0025 130.32 24.7779 130.957 25.4335C131.593 26.089 132.354 26.6115 133.194 26.9703C134.035 27.3292 134.938 27.5175 135.852 27.524C136.754 27.5016 137.643 27.3016 138.467 26.9356C139.292 26.5696 140.036 26.0447 140.657 25.3909C141.279 24.7371 141.766 23.967 142.089 23.1251C142.413 22.2831 142.568 21.3859 142.545 20.4841V20.479Z" fill="#6E5AE2"/>
      <path d="M172.096 8.71897H177.978V32.3914H172.096V28.6905C171.216 30.0333 170.011 31.1323 168.593 31.8854C167.176 32.6386 165.591 33.0216 163.985 32.9988C157.65 32.9988 152.58 27.8777 152.58 20.5285C152.58 13.3821 157.448 8.11031 164.138 8.11031C165.683 8.05359 167.219 8.38001 168.607 9.06091C169.996 9.7418 171.194 10.7558 172.096 12.0124V8.71897ZM171.994 20.5285C171.999 18.703 171.282 16.9496 170.001 15.6492C168.72 14.3488 166.977 13.6065 165.152 13.5837C164.255 13.5944 163.369 13.7833 162.545 14.1392C161.721 14.4951 160.977 15.011 160.354 15.6571C159.732 16.3031 159.243 17.0667 158.918 17.9029C158.593 18.7391 158.437 19.6315 158.46 20.5285C158.437 21.4319 158.595 22.3309 158.923 23.173C159.25 24.0152 159.742 24.7839 160.369 25.4346C160.996 26.0853 161.746 26.6049 162.576 26.9636C163.406 27.3223 164.298 27.5128 165.202 27.5239C167.029 27.4949 168.771 26.7421 170.044 25.4306C171.318 24.1192 172.019 22.3562 171.994 20.5285V20.5285Z" fill="#6E5AE2"/>
      <path d="M197.999 8.71882V13.3821H192.98V32.3912H187.1V13.3821H182.843V8.71882H187.1V-0.000244141H192.98V8.71882H197.999Z" fill="#6E5AE2"/>
      <path d="M1.14795 11.499C1.14946 10.9982 1.2509 10.5027 1.44632 10.0416C1.64174 9.5804 1.9272 9.16285 2.286 8.81338C2.64481 8.46392 3.06975 8.18946 3.53592 8.00627C4.00209 7.82308 4.50011 7.73481 5.00085 7.74649C5.50541 7.72962 6.00824 7.8141 6.47964 7.99479C6.95103 8.17548 7.38143 8.44878 7.74543 8.79858C8.10943 9.14839 8.39965 9.56747 8.59893 10.0313C8.79822 10.4951 8.90253 10.9942 8.90572 11.499C8.90237 12.0037 8.79793 12.5025 8.59855 12.9662C8.39918 13.4298 8.10892 13.8487 7.74492 14.1983C7.38092 14.5478 6.95057 14.821 6.47926 15.0015C6.00795 15.1819 5.50524 15.2662 5.00085 15.2491C4.50032 15.2608 4.00249 15.1727 3.53648 14.9897C3.07048 14.8066 2.64566 14.5324 2.28689 14.1832C1.92812 13.834 1.6426 13.4168 1.44704 12.9559C1.25148 12.495 1.14979 11.9997 1.14795 11.499V11.499Z" fill="#6E5AE2"/>
      </g>
      <defs>
      <clipPath id="clip0_247_6">
      <rect width="198" height="33" fill="white"/>
      </clipPath>
      </defs>
  </svg>
 
    </td></tr></tbody></table>
    </td></tr></tbody></table>
    </td></tr></tbody></table></div>
    <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
    </td></tr></tbody></table></div>
    <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
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
    <table border="0" cellpadding="0" cellspacing="0" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="x " style="font-size:0;word-break:break-word;"><div style="text-align:center;"><p style="Margin:0;text-align:center;"><span style="font-size:28px;font-family:Inter,Arial,sans-serif;font-weight:700;color:#050713;line-height:32px;">Nouveau message de : ${form.firstname} ${form.lastname}</span></p></div>
    </td></tr></tbody></table></div>
    <!--[if mso | IE]>
    </td></tr></table>
    <![endif]-->
    </td></tr></tbody></table></div>
    <!--[if mso | IE]>
    </td></tr></table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" style="width:600px;" width="600" bgcolor="#fffffe"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
    <![endif]--><div class="r pr-16 pl-16 " style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:32px 32px 49px 32px;text-align:left;">
    <!--[if mso | IE]>
    <table border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:536px;">
    <![endif]--><div class="xc536 ogf c " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
    <table border="0" cellpadding="0" cellspacing="0" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="left" class="x m" style="font-size:0;padding-bottom:14px;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;"><span style="font-size:18px;font-family:Inter,Arial,sans-serif;font-weight:600;color:#141b56;line-height:23px;">Depuis le formulaire : ${form.formName}</span></p></div>
    </td></tr><tr><td align="left" class="x m" style="font-size:0;padding-bottom:14px;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;"><span style="font-size:18px;font-family:Inter,Arial,sans-serif;font-weight:600;color:#141b56;line-height:23px;">Email : ${form.email}</span></p></div>
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
    console.log('email sent');
    return {
      statusCode: 200,
      body: JSON.stringify({ status:200, msg: 'email sent' }),
    };
  } catch (err) {
    console.log('Error sending email', err);
    return {
      statusCode: err.code,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};