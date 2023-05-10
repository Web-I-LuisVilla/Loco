import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Mensaje from "./Components/Mensaje";

import Inicio from "./Components/Inicio";
import Contacto from "./Components/Contacto";
import Quienessomos from "./Components/Quienessomos";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* <h1>Props</h1>
     <hr />
     <h2>Contador:{count}</h2>
     <Mensaje contador={count} setCount={setCount} nombre='pedro' edad ='20' url='https://upload.wikimedia.org/wikipedia/commons/d/dd/ESCUDO_JUNIOR.svg'/>
     <Mensaje contador={count} setCount={setCount} nombre='juan' edad ='25'  url='https://upload.wikimedia.org/wikipedia/commons/d/dd/ESCUDO_JUNIOR.svg'/>
     <Mensaje contador={count} setCount={setCount} nombre='maria' edad ='30' url='https://upload.wikimedia.org/wikipedia/commons/d/dd/ESCUDO_JUNIOR.svg'/> */}

      <div className="container mt-3">
        <nav>
          <div className="btn-group">
            <Link to="/" className="btn btn-info">Inicio</Link>
            <Link to="/contacto" className="btn btn-info">Contacto</Link>
            <Link to="/mensaje" className="btn btn-info">Mensaje</Link>
            <Link to="/quienessomos" className="btn btn-info">Quienessomos</Link>
          </div>
        </nav>

        <hr />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="quienessomos" element={<Quienessomos />} />
          <Route
            path="mensaje"
            element={
              <Mensaje
                contador={count}
                setCount={setCount}
                nombre="pedro"
                url={c}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
