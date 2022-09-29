import express from 'express'

const app = express();

// HTTP methods / API RESTful / HTTP Codes

app.get('/games', (req,res) => {
    return res.json([]);
})

app.post('/ads', (req,res) => {
    return res.status(201).json([]);
})

app.get('/ads', (req,res) => {
    return res.json([
        {id: 1, name: 'Anuncio 1'},
        {id: 2, name: 'Anuncio 2'},
        {id: 3, name: 'Anuncio 3'},
        {id: 4, name: 'Anuncio 4'}
    ])
});

app.listen(3333);