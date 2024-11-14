import express from 'express';
const app = express();
const PORT = 3000;

app.post('/cuicui', async (req, res) => {
    console.log("[X] ", req, req.body);   

    res.status(200);
});

app.listen(PORT, () => {
    console.log(`[X Simul] is running on port ${PORT}`);
});