import React from 'react'
import Land from './paginas/Land'
import Unidades from './paginas/Unidades'
import Sucos from './paginas/Sucos'
import Contato from './paginas/Contato'
import { BrowserRouter, Route } from 'react-router-dom'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Land} />
            <Route path="/unidades" component={Unidades} />
            <Route path="/sucos" component={Sucos} />
            <Route path="/contatos" component={Contato} />
        </BrowserRouter>
    )
}

export default Routes