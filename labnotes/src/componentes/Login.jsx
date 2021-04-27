import React, {useState} from 'react'
import {auth, googleAuthProvider, firebase, facebookAuthProvider} from '../firebaseconfig'
import {useHistory} from 'react-router-dom'
import biglogo from '../assets/logo-login.png';




const Login = () => {
    

    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Registro = (e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            
        .then(r =>{
            history.push('/notas')

        })

        .catch (e =>{
            console.log(e, "tienes un error")
        })
    }

    const LoginUsuario = () =>{
        auth.signInWithEmailAndPassword(email, password)
        .then((r) => {history.push('/notas')})
        .catch((err)=>{console.log(err)})
    }

    const loginWithGoogle = () => {
            firebase.auth().signInWithPopup(googleAuthProvider)
            .then((r) => {history.push('/notas')})
            .catch((err)=>{console.log(err)})

    }

    const loginWithFacebook = () => {
        firebase.auth().signInWithPopup(facebookAuthProvider)
        .then((r) => {history.push('/notas')})
        .catch((err)=>{console.log(err)})

    }
    

    return (

        <div>
            <div id="imgLogo">
            <img id="logoBig" src={biglogo}></img>
            </div>
            <form onSubmit={Registro} className="formLogin">
                <div className="inputsLogin">
                    <input className="email" placeholder="email" type="text" onChange={(e)=>setEmail(e.target.value)}></input>
                    <input className="password" placeholder="contraseña" type="password" onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <div className="buttonsAreaLogin">   
                    <input className="buttonLogin" value="Registrarse" type="submit" ></input>   
                    <input className="buttonLogin" type="submit" value="iniciar sesión" onClick={LoginUsuario}></input>
                </div>
                <div>
                <button className="googleButton" type="submit" onClick={loginWithGoogle}></button><button className="fbButton" type="submit" onClick={loginWithFacebook}></button>
                </div>
            </form>
        </div>
    )

}

export default Login;