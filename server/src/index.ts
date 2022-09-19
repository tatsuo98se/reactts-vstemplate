import express from 'express';

const app = express();
app.get('/api/hello', (_, res) => {
    res.json({ "text": "Hello" });
});

app.listen(3003, () => {
    console.log("server start.")
})