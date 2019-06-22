const { createTransport } = require("nodemailer");
const stmp = require("../config/stmp");

let transporter = createTransport({
    host: stmp.host,
    port: 465,
    secure: true,
    auth: {
        user: stmp.user,
        pass: stmp.pass
    }
});

module.exports = function(to, subject, html) {
    let mailOptions = {
        from: stmp.user,
        to,
        subject,
        html
    };
    return new Promise((y, n) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) return n(err);
            return y(info);
        });
    });
};
