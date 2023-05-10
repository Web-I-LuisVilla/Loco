import React,{ useEffect } from "react"

const Quienessomos = () => {
    useEffect(()=>{
     obtenerDatos()
})
const obtenerDatos=async()=>{
    const datos= await fetch('https://api.covid19api.com/total/country/us')
    const usuarios= await datos.json()
    setUsers(usuarios)
}
  return (
    <div>
        <h2>Quienes somos</h2>
        <ol>
            {
                users.map((item)=>
                (<li className="claslist-group-item" key={item.id}>
                    <Link></Link>
                </li>))
            }
        </ol>
    </div>
  )
}

export default Quienessomos