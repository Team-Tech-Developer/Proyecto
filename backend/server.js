const app = require("./app");
const connectDatebase = require("./config/database");

// Setear el archivo de configuracion
const dotenv = require("dotenv");
dotenv.config({path: "backend/config/config.env"})

// Configurar base de datos
connectDatebase();

//Llamamos al server
const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto ${process.env.PORT} en modo ${process.env.NODE_ENV}`);
})