const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 3000;



app.get('/',async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://google.com');
    await page.screenshot({ path: 'google.png' });

    await browser.close();
});

app.listen(port, () => console.log(`Example app listening on ${port} port!`))