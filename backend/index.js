require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require("./db");
const userRoutes = require('./routes/user');
const authRouter = require('./routes/auth');
const solicitudRouter = require("./routes/solicitudes");


//conection dataBase

connection();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRouter);
app.use("/api", solicitudRouter);



const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));