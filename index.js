const express = require("express");
const app = express();
app.use(express.json());

// Addition endpoint
app.post("/add", (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 + num2;
    res.json({ result });
});

// Subtraction endpoint
app.post("/subtract", (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 - num2;
    res.json({ result });
});

app.post("/multiply", (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 * num2;
    res.json({ result });
});

app.post("/divide", (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 / num2;
    res.json({ result });
});

app.post("/exponent", (req, res) => {
    const{ num1, num2 } = req.body;
    const result = Math.pow(num1, num2);
    res.json({ result });
})

app.listen(5001, () => {
    console.log("Arithmetic Service running on port 5001");
});
