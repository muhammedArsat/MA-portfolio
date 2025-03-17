// // EmailSend.js
// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//     port: 465,
//     host: 'smtp.gmail.com',
//     auth: {
//         user: 'muhammedarsathcn@gmail.com',
//         pass: 'kasa_nowh_lttt_mahg', // Replace with your actual password
//     },
//     secure: true,
// });

// export const sendEmail = async (formData) => {
//     const mailData = {
//         from: formData.email,
//         to: "muhammedarsathcn@gmail.com",
//         text: formData.message,
//     }

//     try {
//         const info = await transporter.sendMail(mailData);
//         console.log('Mail sent: %s', info.messageId);
//         return { success: true, message: 'Email sent successfully' };
//     } catch (error) {
//         console.error('Error sending email:', error);
//         return { success: false, message: 'Failed to send email' };
//     }
// };