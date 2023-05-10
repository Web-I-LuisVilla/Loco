import React from "react";
import Imagen from "./Imagen";

const Mensaje = ({nombre, edad, url, contador, setCount}) => {
  return (
    <div>
      <h2>Buenos dias, {nombre}</h2>
      <h3>Edad: {edad}</h3>
      <Imagen urlimg={url} />
      <h4>Contador= {contador}</h4>
      <button onClick={()=> setCount((e)=>e+1)}>Contar</button>
    </div>
  );
};

export default Mensaje;
11