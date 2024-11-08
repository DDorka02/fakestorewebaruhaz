import React, { useContext } from "react";
import "./Termek.css";
import { KosarContext } from "../context/KosarContext";

export default function Termek(props) {
  const {kosarba} =useContext(KosarContext)
  function kattintas() {
    kosarba(props.adat)        
}
  return (
    <div className="card col-md-4">
      <div className="card-header">{props.adat.title}</div>
      <div className="card-body">
        <img  class="img-thumbnail" src={props.adat.image} alt="termek" />
        <p>{props.adat.description}</p>
      </div>
      <div className="card-footer">
        <button type="button" class="btn btn-primary" onClick={()=>kattintas()}>
          Kosárba
        </button>
        <span>{props.adat.price} €</span>
      </div>
    </div>
  );
}
