

const usuariosGet = (req , res ) => {
  const { q, nombre = "No name", apikey, page = 1, limit } = req.query;

  res.json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPost = (req, res ) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "post API - usuariosPost",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res ) => {
  const { id } = req.params;
  res.json({
    msg: "put API - usuariosPut",
    id,
  });
};

const usuariosDelete = (req, res ) => {
  res.json({
    msg: "delete API - usuariosDelete",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
