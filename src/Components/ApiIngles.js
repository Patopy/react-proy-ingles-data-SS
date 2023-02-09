import React from "react";
import Iframe from "react-iframe";

const ApiIngles = () => {
  return (
    <>
      <h1> SpreadSheet API </h1>
      <a
        href="https://script.google.com/macros/s/AKfycbxQr9-8PVpbaJwCOzdHj0YZmwkYI3wGNfy8F_CtHyTSEhMr2z88hICkYWMaJMcps2tvgw/exec"
        target="_blank"
        rel="noreferrer"
      >
        Link: Datos de la Api
      </a>

      <Iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT4sBotIU-ZwP82YsisLLOq30KEEh7gMfwk0392W1Ht0GpJCQpHqKZ21z_woSPdPAYhuT4jUtiuIZhC/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
        height="400"
        width="600"
      />
    </>
  );
};

export default ApiIngles;
