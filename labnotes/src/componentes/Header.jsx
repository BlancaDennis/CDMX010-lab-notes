import React, {Fragment, useEffect, useState} from 'react';
import logoHeader from '../assets/logoHeader.png';
import {auth} from '../firebaseconfig'
import {useHistory, Link} from 'react-router-dom'
//ESTE ES UN COMPONENTE O SEA HOLA
function Header (){
    const history = useHistory()
    const [usuario, setUsuario] = useState(null)
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUsuario(user.email)
                const userName = (user.email)
                console.log(userName)
                
            }
            
        }) 
            

    },[])

    const LogOut = () =>{
        auth.signOut()
        setUsuario(null)
        history.push('/Logout')
    }

    return(
        <div id="hola">
        <div id="logoheader">
            <img src={logoHeader}></img>
        </div>
        <div>
            {
                usuario ? (<button className="buttonLogout" onClick={LogOut} >Cerrar Sesión</button>) : (<span></span>)
            }
             
        </div>

        </div>
    )
}

export default Header;