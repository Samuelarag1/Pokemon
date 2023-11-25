const { Pokemon } = require("../db.js");

const getPokemonById = async (req, res) => {
  try {
    const id = req.params.id;

    if (typeof id === "string") {
      const pokemonDB = await Pokemon.findByPk(id);

      if (pokemonDB) {
        return res.status(200).send(pokemonDB);
      }
    }
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${Number(id)}`
    );

    const pokemon = await response.json();

    return res.status(200).send(pokemon);
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = { getPokemonById };
