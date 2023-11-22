import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_BY_TYPE, ORDER } from "../../redux/userSlice";

const SecondPage = ({ characters, fetchData, currentPage, onSearch }) => {
  const dispatch = useDispatch();

  const filteredCharacters = useSelector(
    (state) => state.user.filteredCharacters
  );
  const handleTypeChange = (e) => {
    dispatch(ORDER_BY_TYPE(e.target.value));
  };

  const renderCharacters = filteredCharacters.length
    ? filteredCharacters
    : characters;

  console.log(renderCharacters);

  const handleOrder = (e) => {
    dispatch(ORDER(e.target.value));
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <NavLink to={"/newUser"}>Crear Pokemon</NavLink>

      <section id="filters">
        <p>Ordenar por: </p>
        <span>Origen</span>
        <br />
        <select name="" id="">
          <option value="API">API</option>
          <option value="DB">DB</option>
        </select>
        <br />
        <span>A-Z | Z-A</span>
        <br />
        <select onChange={handleOrder}>
          <option value="Default">Default</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <br />
        <span>Tipo</span>
        <br />
        <select onChange={handleTypeChange}>
          <option value="All">Todos</option>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="flying">Flying</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="bug">Bug</option>
          <option value="ghost">Ghost</option>
          <option value="steel">Steel</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="ice">Ice</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="fairy">Fairy</option>
          <option value="unknown">Unknown</option>
          <option value="shadow">Shadow</option>
        </select>
      </section>
      <hr />

      {renderCharacters.map((char, i) => (
        <div key={char.id}>
          <NavLink to={`/detail/${char.id}`}>
            <h1>{char.name}</h1>
            <img
              width="180px"
              src={char.sprites.other?.dream_world?.front_default}
              alt={char.name}
            />
          </NavLink>
          {char.types.map((tipo) => (
            <p key={tipo.type.name}>{tipo.type.name}</p>
          ))}
        </div>
      ))}

      <div>
        <button
          onClick={() => fetchData(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Página Anterior
        </button>
        <button onClick={() => fetchData(currentPage + 1)}>
          Página Siguiente
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
