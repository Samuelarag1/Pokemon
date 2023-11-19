const DetailPage = () => {
  return (
  <div>
    <h1>FormPage</h1>

    <form>
    <span>Nombre: </span>
    <input type="text" />


    <span>Imagen</span>
    <input type="image" />


    <span>Vida</span>
    <input type="number" />
    
    <span>Ataque</span>
    <input type="number"/>  
    
    <span>Defensa</span>
    <input type="number"/>
  
    <span>Velocidad</span>
    <input type="number" />

    <span>Altura</span>
    <input type="number"/>

    <span>Peso</span>
    <input type="number"/>
      

      <button>Crear Personaje</button>
      </form>
  </div>

  );
}


export default DetailPage;
