import express from "express";

const app = express()
app.use ( express.json());

const Port = 8080;

app.get('/', (req, res) => {
    res.send('API is running....')
})


app.listen(Port||8080 ,console.log('Listening buddy'));