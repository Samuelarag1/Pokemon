const getPokemonById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const pokemon = await response.json();

    res.status(200).send(pokemon);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { getPokemonById };
