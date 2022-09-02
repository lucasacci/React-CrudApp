import React from 'react'
import { useState, useEffect } from 'react';


const initialForm = {
    name : "",
    poder : '',
    id: null
}

export const CrudForm = () => {
 
    const [form, setForm] = useState(initialForm)

 const handleChange = (e) => {}

 const handleSubmit = (e) => {}

 const handleReset = (e) => {}
 
    return (
    <div>
        <h3>Agregar</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Nombre' onChange={handleChange} value={form.name}/>
            <input type="text" name="poder" placeholder='Poder' onChange={handleChange} value={form.poder}/>
            <input type="submit" value="enviar"/>
            <input type="reset" value="limpiar" onClick={handleReset}/>
        </form>
    </div>
  )
}
