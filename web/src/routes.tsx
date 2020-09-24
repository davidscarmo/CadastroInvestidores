import React from 'react'; 
import {BrowserRouter, Route} from 'react-router-dom'; 


import InvestidorCadastro from './Pages/InvestidorCadastro'; 
import investidoresList from './Pages/InvestidoresList';
import investidorEdit from './Pages/InvestidorEdit';
const Routes = () =>
{
    return(
        <BrowserRouter>
            <Route path="/investidorCreate" component={InvestidorCadastro}/>
            <Route path="/" exact  component={investidoresList} />
            <Route path="/investidorEdit" component={investidorEdit} />
        </BrowserRouter>
    )
}

export default Routes;