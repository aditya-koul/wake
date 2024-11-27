import express from 'express';
import bodyParser from 'body-parser'

const app = express();

app.use(express.json());
app.use(bodyParser.json());

export const base64Encode = async (req, res) => {
    try {
      
      const { input } = req.body;
      console.log(req.body)
      if (!input) {
        return res.status(400).json({ 
          error: 'Input is required',
          output: null,
            result: req.body
        });
      }
  
    
      const output = Buffer.from(input).toString('base64');
  
      // Send response
      res.json({ output });
    } catch (error) {
      // Handle any unexpected errors
      res.status(500).json({ 
        error: 'An unexpected error occurred',
        output: null 
      });
    }
  };



const docs = {
    name: "base64Encode",
    description: "Encode anything to base64",
    input: {
      type: "string",
      description: "Input the data you'd like to encode to base64",
      example: "Hello, world"
    },
    output: {
      type: "string",
      description: "Base64 encoded string",
      example: "SGVsbG8sIHdvcmxk"
    }
  };

  app.get('/functions/base64Encode', (req, res) => {
    res.json(docs);
  });

app.post('/functions/base64Encode', base64Encode);

export default app;
