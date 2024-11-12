import React from 'react'
import Termek from './Termek'

export default function Vasarloter(props) {
  return (
    <>
      {
        props.termekLista.map((element,i)=>{
            return <Termek adat={element} key={element.id} />
        }
        )        
        }
    </>
  )
}
