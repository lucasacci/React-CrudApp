import React from 'react'
import { CrudForm } from './CrudForm'


const initialDb = [
  {
    id: 1,
    name: 'Goku',
    Poder: 'Kame hame ha'
  },
  {
    id: 2,
    name: 'Gohan',
    Poder: 'Masenko'
  },
  {
    id: 3,
    name: 'Vegetta',
    Poder: 'Garlick ho'
  },
  {
    id: 4,
    name: 'Krillin',
    Poder: 'Kienzan'
  },
]

export const CrudApp = () => {
  return (
    <div>
      <h2>CrudApp</h2>
      <CrudForm/>
      <table></table>
    </div>
  )
}
