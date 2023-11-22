import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <input
        onChange={handleOnChange}
        type="search"
        placeholder="Busque su pokemon"
        value={input}
      />
      <button onClick={handleOnClick}>Buscar</button>
      <button id="logout" onClick={handleOnClick}>
        LogOut
      </button>
    </div>
  );
};

export default SearchBar;
