const { Type } = require("../db.js");

const getTypes = async (req, res) => {
  try {
    const result = await fetch("https://pokeapi.co/api/v2/type");
    const tipos = await result.json();

    const tiposArray = tipos.results.map((tipo) => ({
      name: tipo.name,
    }));

    await Type.bulkCreate(tiposArray);
    if (res) {
      return res.status(200).send(tiposArray);
    } else {
      return tiposArray;
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = { getTypes };
