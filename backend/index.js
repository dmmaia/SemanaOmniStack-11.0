const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    return res.json({nome:'David'})
})

app.listen(3333);