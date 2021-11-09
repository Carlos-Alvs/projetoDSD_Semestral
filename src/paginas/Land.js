import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Land.css"

function Land() {
    return (
        <div className="Landpage">
            <div className="layer1">
                <img src="https://download.assistivecards.com/cards/fruits/mango.svg" className="logo" alt="logo" />
                <h1 className="Name">
                    Mango Juice
                </h1>
                <h2 className="Frase">
                    Chupa essa Manga!
                </h2>
            </div>
            <div className="slogan">
                <p>
                    A sua metade da laranja já pode ter virado suco por aqui!
                </p>
            </div>
            <div className="fall">
                <div className="btns">
                    <Link to="/sucos" className="button">
                        Conheça nossos Sucos!
                    </Link>
                </div>
                <div className="btns">
                    <Link to="/unidades" className="button">
                        Veja as Unidades Mais Próximas!
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Land;