const Pokemon = require("../db.js");

const getPokemons = async (req, res) => {
  try {
    if (req.query.name) {
      const name = req.query.name.toLowerCase();

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const pokemon = await response.json();
      return res.status(200).send(pokemon);
    }

    console.log(req.query);

    const { page } = req.query;

    console.log(page);

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
    return res.status(500).send(error);
  }
};

module.exports = { getPokemons };
