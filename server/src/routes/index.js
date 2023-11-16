const { Router } = require("express");
const { getPokemons } = require("../controllers/getPokemons.js");
const { getPokemonById } = require("../controllers/getPokemonById.js");
const { postPokemon } = require("../controllers/postPokemon.js");
const { getTypes } = require("../controllers/getTypes.js");

const router = Router();

router.get("/getPokemons", getPokemons);
router.get("/getTypes", getTypes);
router.get("/getPokemons/:id", getPokemonById);
router.post("/postPokemon", postPokemon);

module.exports = router;
