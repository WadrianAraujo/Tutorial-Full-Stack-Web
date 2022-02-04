const express = require('express')
const app = express()
const port = 3001

const db = require('./models')



db.sequelize.sync().then(()=> {
    app.listen(port, () => { 
        console.log(`Example app listening on port ${port}!`)
        console.log("Pega a Fita")
    });
})

