const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // или import fetch from 'node-fetch' для ES-модулей

const app = express();
const PORT = 3001;

const BOT_TOKEN = '8114253165:AAF9Ccj7xpR-cAwAc9G3rXZm01qF2lVUz9A';
const CHAT_ID = '839973244';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

app.use(bodyParser.json());

app.post('/send-to-telegram', async (req, res) => {
    const { title, author, phone } = req.body;
    const text = `Название: ${title}\nАвтор: ${author}\nПользователь: ${phone}`;

    try {
        const telegramRes = await fetch(TELEGRAM_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text,
            }),
        });
        const data = await telegramRes.json();
        if (data.ok) {
            res.status(200).send({ success: true });
        } else {
            res.status(500).send({ success: false, error: data.description });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: error.toString() });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});