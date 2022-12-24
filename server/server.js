const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));
require('./Configure/exam.config');
require('./Routes/exam.routes')(app);

app.listen(PORT, () => console.log("Server is up and runing"));