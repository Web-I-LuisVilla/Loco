import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

const Quienessomos = () => {
    const [users,setUsers]=React.useState([])
    useEffect(()=>{
        obtenerDatos()
    },[])
    const obtenerDatos=async()=>{
        const datos=await fetch('https://jsonplaceholder.typicode.com/users')
        const usuarios=await datos.json()
        setUsers(usuarios)
    }
  return (
    <div>
        <h2>Quiénes Somos</h2>
        <ol className='list-group'>
            {
                users.map((item)=>
                (<li className='list-group-item' key={item.id}>
                   <Link to={`/quienessomos/${item.id}`}> Nombre: {item.name} - Email:{item.email}</Link></li>))
            }
        </ol>
    </div>
  )
}

export default Quienessomos