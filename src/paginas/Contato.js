import React, { useEffect, useState } from 'react'
import api from '../servicos/api'
import { Link } from 'react-router-dom'
import "./css/Suco.css"
import "./css/menu.css"

function Contato() {
  const [contatos, setContatos] = useState([])
  useEffect(() => {
    api.get('contatos/retornaTodos').then(resposta => {
      setContatos(resposta.data)
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
          contatos.map(contato => {
            return (
              <div className="card" key={contato.id}>
                <h2> {contato.nome} </h2>
                <p> {contato.cargo} </p>
                <span> {contato.email}</span>
              </div>
            )
          })

        }
      </div>
    </>
  )

}

export default Contato;