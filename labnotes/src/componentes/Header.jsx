import React, {Fragment} from 'react';
import logoHeader from '../assets/logoHeader.png';
//ESTE ES UN COMPONENTE O SEA HOLA
function Header (){
    let saludo = "hola que tal"
    return(
        <div id="hola">
        <Fragment>
            <img src={logoHeader}></img>
        </Fragment>
        </div>
    )
}

export default Header;