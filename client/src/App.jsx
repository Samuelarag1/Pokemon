import "./App.css";
import axios from "axios";
import FirstPage from "./components/FirstPage/FirstPage.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import FormPage from "./components/FormPage/FormPage.jsx";
import DetailPage from "./components/DetailPage/DetailPage.jsx";
import { useEffect, useState } from "react";
import SecondPage from "./components/SecondPage/SecondPage.jsx";
import { useDispatch } from "react-redux";
import { SET_ALL_CHARACTERS } from "./redux/userSlice";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async (page) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/getPokemons?page=${page}`
      );
      setCharacters(data);
      setCurrentPage(page);
      dispatch(SET_ALL_CHARACTERS(data));
    } catch (error) {
      console.log("fetch error: " + error);
    }
  };

  const onSearch = async (name) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/getPokemons/?name=${name}`
      );
      setCharacters([data]);
      dispatch(SET_ALL_CHARACTERS(data));
    } catch (error) {
      console.log("fetch error: " + error);
    }
  };

  useEffect(() => {
    navigate("/");
    fetchData(currentPage);
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route
          path="/home"
          element={
            <SecondPage
              characters={characters}
              fetchData={fetchData}
              currentPage={currentPage}
              onSearch={onSearch}
            />
          }
        />
        <Route path="/" element={<FirstPage />} />
        <Route
          path="/detail/:id"
          element={<DetailPage characters={characters} />}
        />
        <Route path="/newUser" element={<FormPage />} />
      </Routes>
    </div>
  );
};

export default App;
