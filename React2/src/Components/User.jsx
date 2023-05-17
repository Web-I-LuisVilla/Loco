import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id}=useParams()
    const [user, setUser]=React.useState([])
    React.useEffect(()=>{
        obtenerDato()
    },[])
    const obtenerDato=async()=>{
        const dato=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const usuario=await dato.json()
        setUser(usuario)
    }
  return (
    <div className='card mt-3'>
        <div className='card-header'>Datos del usuario</div>
        <div className='Card-body'>
            <div className='card-text'>
                <h3>{user.name} - {user.email}</h3>
            </div>
        </div>
    </div>
  )
}

export default User