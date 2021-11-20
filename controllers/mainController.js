
const nodemailer = require('nodemailer');

const mainController = {
    index: (req, res) => {
        res.render('index')
    },
    thanks: (req, res) => {
        res.render('thanks.ejs')
    },
    mail: async (req, res) => {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: 'maldonadomatiasagustin@gmail.com', // generated ethereal user
              pass: 'ctccjntaiodadpzu', // generated ethereal password
            },
          });
        
        // transporter.verify().then(() => {
        //     console.log("Ready for send emails!");
        // })

        let info = await transporter.sendMail({
            from: req.body.youremail, // sender address
            subject: req.body.subject,
            to: 'maldonadomatiasagustin@gmail.com', // list of receivers
            text: `${req.body.yourname} <${req.body.youremail}> \n${req.body.yourmessage}` // plain text body
          })
        .then(()=> res.redirect('/thanks'))
        .catch(error => res.send(error))  
    }
}

module.exports = mainController;