import React from 'react'
import './Calculo.css'

const Calculo = ({ materia, nota }) => {
  return (
     <div className="card">
      <div className="info">
        <h4>{materia}</h4>
        <p>
          Nota Final: <span className="nota">{nota.toFixed(1)}</span>
        </p>
      </div>
      <div className="acoes">
        <a href="#">Adicionar nota do exame</a>
        <button>Exame</button>
      </div>
    </div>
  )
}

export default Calculo
