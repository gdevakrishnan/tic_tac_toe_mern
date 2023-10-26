const express = require('express');
const app = express();
const { default: mongoose } = require('mongoose');
const userAuthRouters = require('./routers/userAuthRouters');
const cors = require('cors');
const playersRouters = require('./routers/playersRouters');

require('dotenv').config();
const {MONGO_URI, PORT} = process.env;

app.use(express.json({extended: false}));
app.use(cors({origin: "https://tic-tac-toe-mern-server.vercel.app/", Credential: true}));

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Database connected successfully\nServer was listening in http://localhost:${PORT}`));
    }).catch((e) => console.log(e));

app.use('/tic_tac_toe', userAuthRouters);
app.use('/tic_tac_toe/play', playersRouters);