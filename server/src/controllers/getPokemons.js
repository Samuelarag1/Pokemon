const { Pokemon } = require("../db.js");

const getPokemons = async (req, res) => {
  try {
    if (req.query.name) {
      const name = req.query.name.toLowerCase();

      const pokemonDB = await Pokemon.findOne({
        where: {
          nombre: name,
        },
      });

      if (pokemonDB) {
        return res.status(200).send({ source: "DB", data: pokemonDB });
      }

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const pokemon = await response.json();

      return res.status(200).send(pokemon);
    }
    const { page } = req.query;

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${page * 12}&limit=12`
    );
    const pokemon = await response.json();

    const pokemonDetail = await Promise.all(
      pokemon.results.map(async (result) => {
        const response = await fetch(result.url);
        return response.json();
      })
    );

    return res.status(200).send(pokemonDetail);
  } catch (error) {
    console.error("Error en getPokemons:", error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = { getPokemons };
