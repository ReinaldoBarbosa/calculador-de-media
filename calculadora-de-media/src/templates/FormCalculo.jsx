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
      <h2>
        <span style={{ color: "green" }}>Calcular</span>{" "}
        <span style={{ color: "blue" }}>Media</span>
      </h2>

      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Matéria"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            required
          />
          {notas.map((nota, i) => (
            <input
              key={i}
              type="number"
              placeholder={`Nota ${i + 1}`}
              value={nota}
              onChange={(e) => handleChangeNota(i, e.target.value)}
              required
            />
          ))}
          <button type="submit">
            Calcular
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormCalculo
