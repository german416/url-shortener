// Express
const express = require('express');
const app = express();

// Body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySql
// ...

// Constantes
const port = 3000;

// Endpoints

// GET http://localhost:3000/status
app.get('/status', (req, res) => {
    res.status(200).json({
      up: true,
      message: 'El servidor está funcionando correctamente.',
    });
  });

// GET http://localhost:3000/list
app.get('/list', (req, res) => {
    let list = [];
    res.status(200).json({
        list: list,
    });
});

// DELETE http://localhost:3000/del
app.delete('/del', (req, res) => {
    res.status(200).json({
        message: 'Under construction',
    });
});

// POST http://localhost:3000/short
app.post('/short', (req, res) => {

    try {
        const newItem = {
            longUrl: req.body.url,
            shortUrl: '',
            creationDateTimeUTC: new Date(Date.now()),
        }
    
        list.push(newItem);
    
        res.status(200).json({
            message: '',
            data: newItem,
        });
        
    } catch (error) {
        res.status(500).json({
            error: error,
        });
    }
});

// GET http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})