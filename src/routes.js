import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Pages from './Pages';

import PisosCalculator from './pages/PisosCalculator';



function Routes(){ 
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    < Pages />
                </Route>
                <Route exact path="/calculadora-pisos">
                    < PisosCalculator />
                </Route>
            </Switch>
        </BrowserRouter>
    );
    
};

export default Routes;