import puppeteer from "puppeteer";
import buildBriefHtml from "./briefPdfTemplate.js";

/* This is a Puppeteer function that turns the briefPdfTemplate.js HTML into a PDF buffer, so the raw file data is held in memory (as bytes)
instead of saved to disk. Puppeteer passes the PDF's actual bytes directly which is being passed straight to Nodemailer as an email attachment
with no temporary file needed. */

const generateBriefPdf = async (brief) => {

    const browser = await puppeteer.launch({

        headless: "new",
        args: ["--no-sandbox", "--disable-setuid-sandbox"],

    });

    try {

        const page = await browser.newPage();
        const html = buildBriefHtml(brief);

        await page.setContent(html, { waitUntil: "networkidle0" });

        const pdfBuffer = await page.pdf({

            format: "Letter",
            printBackground: true,
            margin: { top: "20px", bottom: "20px", left: "20px", right: "20px" },

        });

        return pdfBuffer;

    } finally {

        await browser.close();

    }

};

export default generateBriefPdf;