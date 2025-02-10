const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.static(path.join("D:\\trip-wiki")));

app.get('/*', (req, res)=> {
    res.sendFile(path.join("D:\\trip-wiki", 'index.html'))
});

app.listen(PORT, () => {
    console.log('START SERVER');
})