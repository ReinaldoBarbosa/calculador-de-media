import React, { createContext, useContext, useState } from "react";

const CalculosContext = createContext();

export const CalculosProvider = ({ children }) => {
  const [calculos, setCalculos] = useState([]);

  const adicionarCalculo = (materia, notas) => {
    const media = notas.reduce((acc, n) => acc + parseFloat(n), 0) / notas.length;
    const novoCalculo = { materia, notas, media };

    console.log("Novo cálculo adicionado:", novoCalculo);

    setCalculos([...calculos, novoCalculo]);
    console.log("Lista atualizada:", [...calculos, novoCalculo]);
  };



  return (
    <CalculosContext.Provider value={{ calculos, adicionarCalculo }}>
      {children}
    </CalculosContext.Provider>
  );
};

export const useCalculos = () => {
  return useContext(CalculosContext);
};