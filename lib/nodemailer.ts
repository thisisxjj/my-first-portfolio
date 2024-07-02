import nodemailer from 'nodemailer'

const email = process.env.QQ_SMTP_EMAIL
const pass = process.env.QQ_SMTP_SECRET_CODE

export const transporter = nodemailer.createTransport({
  pool: true,
  host: 'smtp.qq.com',
  port: 465,
  secure: true, // use TLS
  auth: {
    user: email,
    pass,
  },
})

export const mailOptions = {
  from: `"来自 ThisIsXJJ 的信息" ${email}`, // sender address
  to: email, // list of receivers
}
