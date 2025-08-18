import React, { useState, useEffect } from "react";
import Btn from "../components/button/btn";
import '../App.css'
import Calculo from "../components/calculo/Calculo";
import { useCalculos } from "../context/CalculosContext";

const ListaMedias = () => {
 const [dados, setDados] = useState([]);
 const { calculos } = useCalculos();


  useEffect(() => {
    fetch("/dados.json")
      .then((res) => res.json())
      .then((data) => setDados(data))
      .catch((err) => console.error("Erro ao carregar dados:", err));
  }, []);

  
  console.log("Cálculos atuais:", calculos);


  return (
    <div className="container">
      <div className="header">
        <h2>Lista de Médias</h2>
        <Btn titulo={"Novo Calculo"} link={"/novo-calculo"}/>
      </div>

       {calculos.length === 0 ? (
        <p>Nenhum cálculo realizado.</p>
        ) : (
          <ul className="calculos-lista">
            {calculos.map((c, i) => (
              <li key={i} className="calculo-card">
                <div className="card-header">
                  <span className="materia">{c.materia}</span>
                  {c.media <7 && (
                    <a href="#" className="adicionar-exame">Adicionar nota do exame</a>
                  )}
                </div>

                <div className="card-body">
                  <p className="nota-label">Nota Final:</p>
                  <span className={`nota ${c.media < 7 ? "reprovado" : "aprovado"}`}>
                    {c.media.toFixed(1)}
                  </span>
                </div>

                {c.media < 7 && (
                  <button className="exame-btn">Exame</button>
                )}

                {c.media > 7 && (
                  <button className={`exame-btn ${c.media < 7 ? "reprovado" : "aprovado"}`}>Aprovado</button>
                )}

              </li>
            ))}
        </ul>
        )}
    </div>
  );
}

export default ListaMedias
