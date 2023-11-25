import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_BY_TYPE, ORDER } from "../../redux/userSlice";
import styles from "./second.module.css";

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

  const handleOrder = (e) => {
    dispatch(ORDER(e.target.value));
  };

  return (
    <div className={styles.contenedor}>
      <SearchBar onSearch={onSearch} />
      <NavLink className={styles.btnCrear} to={"/newUser"}>
        Crear Pokemon
      </NavLink>

      <section className={styles.filters} id="filters">
        <p>Ordenar por: </p>
        <div>
          <span>Origen: </span>
          <select>
            <option value="API">API</option>
            <option value="DB">DB</option>
          </select>
        </div>

        <div>
          <span>Alfabeticamente: </span>

          <select onChange={handleOrder}>
            <option value="Default">Default</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
        </div>

        <div>
          <span>Tipo: </span>
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
        </div>
      </section>
      <hr />
      <div className={styles.container}>
        {renderCharacters.map((char, i) => (
          <div className={styles.card} key={i}>
            <NavLink to={`/detail/${char.id ? char.id : char.data.id}`}>
              <h1 className={styles.title}>
                {char.name ? char.name : char.data.nombre}
              </h1>
              <img
                className={styles.imagen}
                width="180px"
                src={
                  char.sprites
                    ? char.sprites.other?.dream_world?.front_default
                    : char.data.imagen
                }
                alt={char.name}
              />
            </NavLink>
            {char.types
              ? char.types.map((tipo) => (
                  <p className={styles.price} key={tipo.type.name}>
                    {tipo.type.name}
                  </p>
                ))
              : char.data.tipo}
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <button
          className={styles.pages}
          onClick={() => fetchData(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Página Anterior
        </button>
        <button
          className={styles.pages}
          onClick={() => fetchData(currentPage + 1)}
        >
          Página Siguiente
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
