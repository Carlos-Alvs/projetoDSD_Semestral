import React, { useEffect, useState } from 'react'
import api from '../servicos/api'
import { Link } from 'react-router-dom'
import "./css/Suco.css"
import "./css/menu.css"

function Sucos() {
  const [pratos, setPratos] = useState([])
  useEffect(() => {
    api.get('pratos/retornaTodos').then(resposta => {
      setPratos(resposta.data)
    })
  }, [])

  return (
    <>
      <nav id="menu">
        <ul>
          <li><img src="https://download.assistivecards.com/cards/fruits/mango.svg" className="logoMenu" alt="logoMenu" /></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sucos">Sucos</Link></li>
          <li><Link to="/unidades">Unidades</Link></li>
          <li><Link to="/contatos">Contatos</Link></li>
        </ul>
      </nav>
      <div className="row">
        {
          pratos.map(prato => {
            return (
              <div className="card" key={prato.id}>
                <h2> {prato.nome} </h2>
                <p> TIPO: {prato.tipo} </p>
                <span> R$ {prato.preco},00 </span>
                <p> Ingredientes: {prato.listaDeIngredientes} </p>
              </div>
            )
          })

        }
      </div>
    </>
  )

}

export default Sucos;