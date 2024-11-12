import React from 'react'
import TermekAdminSor from './TermekAdminSor'

export default function TermekAdmin(props) {
  return (
    <table>
        <th>Title</th>
        <th>Kép, leírás</th>
        <th>Ár</th>
        <th>Törlés</th>
        <th>Szerkesztés</th>
      {
        props.adminLista.map((element,i)=>{
            return <TermekAdminSor adat={element} key={element.id} />
        }
        )      
        }

    </table>
  )
}
