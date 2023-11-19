import { useNavigate } from "react-router-dom";

const FirstPage = () => {

  const navigate = useNavigate();
  
const handleOnClick = () => {
    navigate('home');
  }


  return(
    <div>
      <h1>
      Bienvenidos a mis pokehuevos
      </h1>
  
      <button onClick={handleOnClick}>Ingresar</button>

    </div>

  );
}

export default FirstPage;
