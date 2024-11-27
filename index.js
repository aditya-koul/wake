import express from 'express';
import bodyParser from 'body-parser'

const app = express();

app.use(express.json());
app.use(bodyParser.json());

export const calculateFactorial = async (req, res) => {
  const { input } = req.body;
  if (typeof input !== 'number' || input < 0 || !Number.isInteger(input)) {
    return res.status(400).send({ error: 'Input must be a non-negative integer' });
  }

  const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));

  const output = factorial(input);
  res.send({ output });
};

  app.get('/functions/get_factorial', (req, res) => {
    const docs = {
      "name": "calculateFactorial",
      "description": "Calculates the factorial of a non-negative integer",
      "input": {
        "type": "integer",
        "description": "A non-negative integer to calculate the factorial of",
        "example": 5
      },
      "output": {
        "type": "integer",
        "description": "The factorial of the input number",
        "example": 120
      }
    };
    res.json(docs);
  });

app.post('/functions/cal_factorial', base64Encode);

export default app;
