import React from 'react'

export default function TermekAdminSor(props) {
    
  
    function torles() {
     torles(props.adat)        
  }
  function szerkeztes() {
    szerkeztes(props.adat)        
}
    return (
      <tr>
        <td>{props.adat.title}</td>
        <td >
          <img  class="img-thumbnail" src={props.adat.image} alt="termek" /><td>
          <p>{props.adat.description}</p>
          </td>
        </td>
        <td><span>{props.adat.price} €</span></td>
        <td >
          <button type="button" class="btn btn-danger" onClick={()=>torles()}>
            Törlés
          </button></td>
          <td> <button type="button" class="btn btn-success" onClick={()=>szerkeztes()}>
            Szerkeztes
          </button></td>
          
          
        
      </tr>
    )
}
