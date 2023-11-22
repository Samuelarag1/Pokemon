import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    if (e.target.id === "back") {
      navigate("/home");
    }
  };

  return (
    <div>
      <button onClick={handleOnClick} id="back">
        Back
      </button>
      <h1>FormPage</h1>

      <form>
        <p>Nombre: </p>
        <input type="text" />

        <br />
        <p>Imagen</p>
        <input type="text" />
        <br />
        <p>Vida</p>
        <input type="number" />
        <br />
        <p>Ataque</p>
        <input type="number" />
        <br />
        <p>Defensa</p>
        <input type="number" />
        <br />
        <p>Velocidad</p>
        <input type="number" />
        <br />
        <p>Altura</p>
        <input type="number" />
        <br />
        <p>Peso</p>
        <input type="number" />
        <br />
        <button>Crear Pokemon</button>
      </form>
    </div>
  );
};

export default FormPage;
