const { request, response } = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();


console.log(process.env.PASS);
const envioCorreo = (req=request, resp=response) =>{
    let body = req.body;
 //Envio Gmail
    let transport = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        auth:{
            user:'pedro7277@gmail.com',
            pass:'Pedr0871121'
        }
    });

    const mailOptions ={
        from:body.email,
        subject: body.asunto,
        to: 'pedro7277@gmail.com',
        text: body.mensaje
    };



transport.sendMail(mailOptions, function(error,result){
        if (error) return resp.json({ok:false,msg:error});
        return resp.json({
            ok:true,
            msg:result
        })
    })
}

module.exports = {
    envioCorreo
}