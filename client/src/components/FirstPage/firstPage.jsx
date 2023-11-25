import { useNavigate } from "react-router-dom";
import styles from "./firstpage.module.css";
const FirstPage = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("home");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenidos a mi Pokedex</h1>

      <button className={styles.efecto} onClick={handleOnClick}>
        Ingresar
      </button>
    </div>
  );
};

export default FirstPage;
