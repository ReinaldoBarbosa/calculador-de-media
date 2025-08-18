import React, { createContext, useContext, useState } from "react";

const CalculosContext = createContext();

export const CalculosProvider = ({ children }) => {
  const [calculos, setCalculos] = useState([]);

  const adicionarCalculo = (materia, notas) => {
    const [np1, np2, np3] = notas.map(n => parseFloat(n)); 
    const media = ((np1 * 4) + (np2 * 4) + (np3 * 2)) / 10;
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