const { Pokemon, Type } = require("../db.js");

const postPokemon = async (req, res) => {
  try {
    const {
      nombre,
      imagen,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
      tipo,
    } = req.body;

    const newPokemon = await Pokemon.create({
      nombre,
      imagen,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
    });

    //! ACA PODEMOS OBSERVAR LA ASOCIACION DE UN TIPO DE POKEMON DE LA DB CON UN POKEMON RECIEN CREADO!

    await Promise.all(
      tipo.map(async (tipo) => {
        const type = await Type.findOne({ where: { name: tipo } });
        if (type) {
          await newPokemon.addType(type);
        }
      })
    );

    return res.status(200).send(newPokemon);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { postPokemon };
