import React from 'react'
import biglogo from '../assets/logo-login.png';
import {useHistory, Link} from 'react-router-dom'

const LogoutEnd = () => {

    const history = useHistory()

    const backtoend = () =>{
        history.push('/')
    }
   

    return (

        <div>
            <img id="logoBigEnd" src={biglogo}></img>

            <h3 onClick={backtoend} > Click para iniciar sesión (: </h3>
        </div>
    )

}

export default LogoutEnd;