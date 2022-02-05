const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(express.json());
app.use(cors());

const db = require('./models');

//Routers
const postRouter = require('./routes/Posts');
app.use("/posts",postRouter);


db.sequelize.sync().then(()=> {
    app.listen(port, () => { 
        console.log(`Example app listening on port ${port}!`);
    });
});

