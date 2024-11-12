import React, { useContext, useState } from 'react'
import { ApiContext } from '../context/ApiContext'

export default function Urlap() {

    const{postAdat}=useContext(ApiContext)
    const [adat,setadat]= useState({
        title: "Ez a termék",
        "price": 1000,
        "description": '...',
        "category": '...',
        "image": '...' 
    })

    function valtozataskezeles(event){
        const sObj={...adat}
        sObj[event.target.id]=event.target.value
        setadat({...sObj})
    }

    function elkuld(event){
       event.defaultPrevented()

        console.log("elküld", adat)
        postAdat("/products",adat)
    }
  return (
    <div>
      <form onSubmit={elkuld}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">A termék neve</label>
            <input type="text" value={adat.title} onChange={valtozataskezeles} className="form-control" id="title" />
        </div>
        <div className="mb-3">
            <label htmlFor="price" className="form-label">A termék ára</label>
            <input type="number" min="1000" max= "100000" value={adat.price} onChange={valtozataskezeles} className="form-control" id="price"  />
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">A termék leírása</label>
            <input type="form-control" value={adat.description} rows="3" onChange={valtozataskezeles} className="form-control" id="description" />
        </div>
        <div className="mb-3">
            <label htmlFor="category" className="form-label">A termék kategória</label>
            <input type="select-option" value={adat.category} onChange={valtozataskezeles} className="form-control" id="category" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
    </div>
  )
}
