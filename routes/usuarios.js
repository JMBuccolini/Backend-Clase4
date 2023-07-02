const { Router } = require("express"); //El módulo Router nos permite crear las rutas y asociar los controladores

const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
} = require("../controllers/usuarios");

const router = Router(); //Creamos una instancia de Router. Obtenemos un objeto  que nos permite definir nuestras rutas y asociar los controladores.

router.get("/", usuariosGet);

router.put("/:id", usuariosPut);

router.post("/", usuariosPost);

router.delete("/", usuariosDelete);

module.exports = router;
