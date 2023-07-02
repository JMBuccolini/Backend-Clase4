const express = require("express");
const cors = require("cors"); //middleware que nos permite habilitar el intercambio de recursos de origen cruzado, permite que las solicitudes se
//realicen desde dominios o puertos diferentes al del servidor.

class Server {
  //Constructor de la clase
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //Middlewares
    this.middlewares();

    //Rutas de mi aplicación
    this.routes();
  }
  //Definimos los métodos

  middlewares() {
    //Estos middlewares serán ejecutados antes de que las solicitudes lleguen a las rutas
    //CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    //Directorio Público
    this.app.use(express.static("public")); //se utiliza para servir archivos estáticos desde el directorio "public". 
    //Esto puede ser útil para servir archivos CSS, imágenes u otros archivos estáticos.
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
