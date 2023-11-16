const Pokemon = require("../db.js");

const getPokemons = async (req, res) => {
  try {
    if (req.query.name) {
      const name = req.query.name.toLowerCase();

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const pokemon = await response.json();
      return res.status(200).send(pokemon);
    }

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const pokemons = await response.json();

    const personajes = Promise.all(
      pokemons.results?.map(async (resultado) => {
        const response = await fetch(resultado.url);
        return response.json();
      })
    );
    return res.status(200).send(await personajes);
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { getPokemons };
