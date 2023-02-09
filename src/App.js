import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import Menu from "./Menu";

export default function App() {
  const [texto, setText] = useState(null);

  const getData = () => {
    const url =
      "https://script.google.com/macros/s/AKfycbxQr9-8PVpbaJwCOzdHj0YZmwkYI3wGNfy8F_CtHyTSEhMr2z88hICkYWMaJMcps2tvgw/exec";

    axios
      .get(url)
      .then(function (response) {
        // console.log([response.data.records]);
        setText([response.data.records]);
        // console.log(texto);
      })
      .catch(function (error) {
        //console.log(error);
        setText(null);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h2>Ejemplo de menu con react-router-dom</h2>

        {texto && <Menu texto={texto} />}
      </div>
    </div>
  );
}
