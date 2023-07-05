const express = require("express");
const cors = require("cors")
require("dotenv").config();
require("./config/database")
const Rutes = require("./routes/routes")

const app = express();

const PORT = process.env.PORT || 4000;

app.set("port", PORT);
app.use(cors())
app.use(express.json());
app.use("/api",Rutes)

app.listen(PORT,()=>{
    console.log(" SERVIDOR CORRIENDO EN EL PUERTO:"+ app.get("port"))
});