import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./searchbar.module.css";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();
  const handleOnClick = (e) => {
    if (e.target.id === "logout") {
      navigate("/");
    }
    onSearch(input);
    setInput("");
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <div className={styles.busqueda}>
        <div className={styles.search}>
          <input
            className={styles.input}
            onChange={handleOnChange}
            type="search"
            placeholder="Busque su pokemon"
            value={input}
          />
        </div>
      </div>
      <div className={styles.botones}>
        <button className={styles.buscar} onClick={handleOnClick}>
          Buscar
        </button>
        <button className={styles.salir} id="logout" onClick={handleOnClick}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
