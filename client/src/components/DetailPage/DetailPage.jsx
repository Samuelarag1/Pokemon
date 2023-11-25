import { useNavigate, useLocation } from "react-router-dom";
import styles from "./detail.module.css";

const DetailPage = ({ characters }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const handleOnClick = () => {
    navigate("/home");
  };
  let pj = [];

  characters.find((char) => {
    if (char.id === Number(id)) {
      pj.push(char);
    }
  });
  console.log(pj);

  return (
    <div className={styles.container}>
      <button className={styles.btnBack} onClick={handleOnClick}>
        Back
      </button>

      {pj.map((p, i) => (
        <div key={i}>
          <p>ID: {p.id ? p.id : p.data.id}</p>
          <h1>
            {p.name
              ? `${p.name[0].toLocaleUpperCase() + p.name.slice(1)} `
              : p.data.nombre}
          </h1>
          <img
            src={p.data ? p.data.imagen : p.sprites.other?.home?.front_default}
            alt={`${p.name} image`}
            width="250px"
          />
          <p>Vida: {p.data ? p.data.vida : p.stats[0]?.base_stat}</p>
          <p>Ataque: {p.data ? p.data.ataque : p.stats[1].base_stat}</p>
          <p>Defensa: {p.data ? p.data.defensa : p.stats[2].base_stat}</p>
          {/* <p>
            {p.stats[5].base_stat
              ? `Velocidad: ${p.stats[5].base_stat}`
              : "" && p.data.velocidad}
          </p>
          <p>{p.weight ? `Peso: ${p.weight}` : "" && p.data.peso}</p>
          <p>
            Tipo:{" "}
            {p.types[0] && p.types[1]
              ? `${p.types[0].type.name} ${p.types[1].type.name}`
              : p.types[0].type.name || p.data.tipo}
          </p> */}
        </div>
      ))}
    </div>
  );
};

export default DetailPage;
