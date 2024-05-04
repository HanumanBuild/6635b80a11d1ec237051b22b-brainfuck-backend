const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const brainfuck = require('brainfuck-js');

const app = express();
const port = 5000;  // Using a hardcoded port number for the backend

app.use(cors());
app.use(bodyParser.json());

app.post('/execute', (req, res) => {
    try {
        const { code } = req.body;
        const interpreter = new brainfuck();
        const output = interpreter.execute(code);
        res.json({ success: true, output: output });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error executing the Brainfuck script.' });
    }
});

app.listen(port, () => {
    console.log(`Brainfuck backend listening at http://localhost:${port}`);
});