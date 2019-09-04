const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();
const items = require("./routes/api/items");

//Bodyparser Middleware
app.use(bodyParser.json());

//cnnect DB
connectDB();

// Use Routes
app.use("/api/items", items);
//app.use('/api/users', require('./routes/api/users'));
//app.use('/api/auth', require('./routes/api/auth'));

//port connect
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));
