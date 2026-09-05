import nodemailer from "nodemailer";

/* This is the email utility that sends an email with a PDF attachment. */

const transporter = nodemailer.createTransport({

    service: "gmail",
    auth: {

        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,

    },

});

const sendBriefEmail = async (recipientEmail, pdfBuffer, projectName) => {

    await transporter.sendMail({

        from: process.env.EMAIL_USER,
        to: recipientEmail,
        subject: `Your Brief.io Brief: ${projectName}`,
        text: "Attached is the PDF of the brief you just created on Brief.io.",
        attachments: [

            {
                filename: `${projectName}.pdf`,
                content: pdfBuffer,
            },

        ],

    });
    
};

export default sendBriefEmail;