import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Form.module.css";

const FormPage = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    nombre: "",
    imagen: "",
    vida: "",
    ataque: "",
    defensa: "",
    velocidad: "",
    altura: "",
    peso: "",
    tipo: "",
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const pokemonData = {
    nombre: input.nombre,
    imagen: input.imagen,
    vida: parseInt(input.vida),
    ataque: parseInt(input.ataque),
    defensa: parseInt(input.defensa),
    velocidad: parseInt(input.velocidad),
    altura: parseInt(input.altura),
    peso: parseInt(input.peso),
    tipo: [input.tipo],
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/postPokemon", pokemonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setInput({
      nombre: "",
      imagen: "",
      vida: "",
      ataque: "",
      defensa: "",
      velocidad: "",
      altura: "",
      peso: "",
      tipo: "",
    });

    alert("¡Pokemon creado con éxito!");
  };

  const handleOnClick = (e) => {
    if (e.target.id === "back") {
      navigate("/home");
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={handleOnClick} id="back" className={styles.backButton}>
        Back
      </button>
      <h1 className={styles.header}>Crea tu propio Pokemon!</h1>

      <form onSubmit={handleOnSubmit} className={styles.form}>
        {formFields.map((field) => (
          <div key={field.name} className={styles.field}>
            <br />
            <label className={styles.label}>{field.label + ":"}</label>
            <input
              placeholder={field.placeholder}
              name={field.name}
              type={field.type}
              onChange={handleOnChange}
              value={input[field.name]}
              className={styles.input}
            />
          </div>
        ))}

        <button type="submit" className={styles.submitButton}>
          Crear Pokemon
        </button>
      </form>
    </div>
  );
};

export default FormPage;

const formFields = [
  {
    label: "Nombre",
    name: "nombre",
    placeholder: "Ingrese su nombre",
    type: "text",
  },
  {
    label: "Imagen",
    name: "imagen",
    placeholder: "Ingrese su URL",
    type: "text",
  },
  {
    label: "Vida",
    name: "vida",
    placeholder: "Ingrese su vida",
    type: "number",
  },
  {
    label: "Ataque",
    name: "ataque",
    placeholder: "Ingrese su ataque",
    type: "number",
  },
  {
    label: "Defensa",
    name: "defensa",
    placeholder: "Ingrese su defensa",
    type: "number",
  },
  {
    label: "Velocidad",
    name: "velocidad",
    placeholder: "Ingrese su velocidad",
    type: "number",
  },
  {
    label: "Altura",
    name: "altura",
    placeholder: "Ingrese su altura",
    type: "number",
  },
  {
    label: "Peso",
    name: "peso",
    placeholder: "Ingrese su peso",
    type: "number",
  },
  { label: "Tipo", name: "tipo", placeholder: "Ingrese su tipo", type: "text" },
];
