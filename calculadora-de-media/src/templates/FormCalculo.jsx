import React, { useEffect, useState } from "react";
import Btn from "../components/button/btn";
import { useCalculos } from "../context/CalculosContext";
import { Link, useNavigate } from "react-router-dom";

const FormCalculo = () => {
  const { adicionarCalculo } = useCalculos();
  const [materia, setMateria] = useState("");
  const [notas, setNotas] = useState(["", "", ""]);
  const navigate = useNavigate();

  const handleChangeNota = (index, value) => {
    const novasNotas = [...notas];
    novasNotas[index] = value;
    setNotas(novasNotas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarCalculo(materia, notas);
    navigate('/');
  };

  return (

    <div className="form-container">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <label>Materia</label>
          <input 
            type="text" 
            placeholder="Digite o nome da materia" 
            value={materia} 
            onChange={(e) => setMateria(e.target.value)} 
            required 
          />
          <label>Nota da Np1</label>
          <input
            type="number"
            placeholder="Digite a nota da Np1"
            value={notas[0]}
            onChange={(e) => handleChangeNota(0, e.target.value)}
            required
          />
          <label>Nota da Np2</label>
          <input
            type="number"
            placeholder="Digite a nota da Np2"
            value={notas[1]}
            onChange={(e) => handleChangeNota(1, e.target.value)}
            required
          />
          <label>Nota do PIM</label>
          <input
            type="number"
            placeholder="Digite a nota do PIM"
            value={notas[2]}
            onChange={(e) => handleChangeNota(2, e.target.value)}
            required
          />

          <button className="botao-azul" type="submit">
            Calcular
          </button>
          <button
            type="button"
            className="botao-azul"
            onClick={() => navigate('/')}
          >
            Voltar
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormCalculo;
