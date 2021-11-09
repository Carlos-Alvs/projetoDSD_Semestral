import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../servicos/api'
import "./css/Unidades.css"
import "./css/menu.css"

function Unidades() {


    const [restaurantes, setRestaurantes] = useState([])
    useEffect(() => {
        api.get('restaurantes/retornaTodos').then(resposta => {
            setRestaurantes(resposta.data)
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
                    restaurantes.map(restaurante => {
                        return (
                            <div className="card" key={restaurante.id}>
                                <h2> {restaurante.nome} </h2>
                                <p> TIPO: {restaurante.tipo} </p>
                                <span> LOCAL: {restaurante.local} </span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}

export default Unidades;