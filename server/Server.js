const express = require('express');
const app = express();
const { default: mongoose } = require('mongoose');
const userAuthRouters = require('./routers/userAuthRouters');
const cors = require('cors');

require('dotenv').config();
const {MONGO_URI, PORT} = process.env;

app.use(express.json({extended: false}));
app.use(cors({origin: true, Credential: true}));

mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`Database connected successfully\nServer was listening in http://localhost:${PORT}`))
    }).catch((e) => console.log(e.message));

app.use('/tic_tac_toe', userAuthRouters);