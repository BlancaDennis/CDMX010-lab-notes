import React, {useState, useEffect} from 'react'
import {db} from '../firebaseconfig'
//ESTE ES UN COMPONENTE O SEA HOLA
function GuardarNotas (){
  const [modoEditar, setEditar] = useState(null)
  const [idNota, setIdNota] = useState("")
  const [titulo, setTitulo] = useState("")
  const [nota, setNota] = useState("")
  const [error, setError] = useState("")
  const [usuariosNota, setNotasNew] = useState([])

  useEffect(() => {
        const getNotas = async () =>{
        const { docs } = await db.collection('notas').orderBy("tituloObjeto", "asc").get()
        const nuevoArray = docs.map(item =>({id: item.id, ...item.data() }))
        setNotasNew(nuevoArray)
        console.log(nuevoArray); //renderiza las notas desps de tomar la info
      }
      getNotas(); //trae los datos desde firebase y ademas los renderiza y tmbn los ids pa usar dsps.
  },[])

  
  const setNotas = async (e) => {
    e.preventDefault()
    if(!titulo.trim()){
      alert("El titulo esta vacio")
    }
    if(!nota.trim()){
      alert("El contenido de la nota esta vacio")
    }
    const notaObjeto = {
      tituloObjeto : titulo,
      notaObjeto : nota
    }
    try{

      const data = await db.collection('notas').add(notaObjeto)
        const { docs } = await db.collection('notas').get()
        const nuevoArray = docs.map(item =>({id: item.id, ...item.data() }))
        setNotasNew(nuevoArray);
        alert('nota añadida')
      console.log('Nota añadida')
      setTitulo("")
      setNota("")
      
    } catch(e){
      console.log(e)
    }
    

  }

  const borrarNota = async (id) => {
    try{
      await db.collection('notas').doc(id).delete()
      const { docs } = await db.collection('notas').get()
      const nuevoArray = docs.map(item =>({id: item.id, ...item.data() }))
      setNotasNew(nuevoArray);
    }catch(e){
      console.log(e)
    }
  }

  const editarNota = async (id) => {
    try{
    const data = await db.collection('notas').doc(id).get()
    const {tituloObjeto, notaObjeto} = data.data()
    setTitulo(tituloObjeto)
    setNota(notaObjeto)
    setIdNota(id)
    setEditar(true)
    console.log(data.data(), id)
    }catch (e){
      console.log(e)
    }
  }

  const setUpdate = async (e) => {
    e.preventDefault()
    if(!titulo.trim()){
      alert("El titulo esta vacio")
    }
    if(!nota.trim()){
      alert("El contenido de la nota esta vacio")
    }
    const noteUpdate = {
      tituloObjeto : titulo,
      notaObjeto : nota
    }
    try{
      await db.collection('notas').doc(idNota).set(noteUpdate)
      const { docs } = await db.collection('notas').get()
      const nuevoArray = docs.map(item =>({id: item.id, ...item.data() }))
      setNotasNew(nuevoArray);

    }catch(e){
    console.log(e)
    }
    setTitulo("")
    setNota("")
    setIdNota("")
    setEditar(false)
    
  }

    return(
        <div className="FormNotes">
      <div>
        <form onSubmit = {modoEditar ? setUpdate : setNotas}>
          <input value = {titulo} id="inputTitulo" onChange={(e)=>{setTitulo(e.target.value)}} type="text" placeholder="Titulo"/>
          <input value = {nota} id="inputNota" onChange={(e)=>{setNota(e.target.value)}} type="text" placeholder="Agregar nota"/>
          {
            modoEditar ? 
            (
              <input type="submit" className="button" value="Editar"/>
            )
            :
            (
              <input type="submit" className="button" value="Guardar"/>
            )
          }
          
        </form>
        {error ? (<p>{error} </p>) : (<span></span>)}
      </div>
      <div>
        <div>
        {
          usuariosNota.length !== 0 ? (
            usuariosNota.map(item =>(
            <div>
              <div id="cardNote" key={item.id}>
                <div id="titleStyle">{item.tituloObjeto}</div> 
                <div id="noteStyle">{item.notaObjeto}</div>
                </div>
                <div id="buttonsArea">
                <button onClick={(id)=>{borrarNota(item.id)}} className="eliminar"></button><button onClick={(id)=>{editarNota(item.id)}} className="editar"></button>
                </div>
              
              </div>
              
            ))
          ) :(
            <span>
              No tienes notas 
            </span>
          )
        }
          </div>
      </div>

    </div>
    )
}

export default GuardarNotas;