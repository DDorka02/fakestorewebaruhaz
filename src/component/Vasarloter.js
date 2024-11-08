import React, { useContext, useEffect, useState } from 'react'
import { KosarContext } from '../context/KosarContext';

export default function Vasarloter(termekLista) {
  const { kosarba } = useContext(KosarContext);
  const [kategoriaLista, setKategoriaLista] = useState([]);
  const [aktualisKategoria, setAktualisKategoria] = useState("");

  useEffect(() => {

    const fetchCategories = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const categories = await response.json();
        setKategoriaLista(categories);
      } catch (error) {
        console.error("Hiba a kategóriák lekérésekor:", error);
      }
    };
    fetchCategories();
  }, []);


  const szurtTermekLista = aktualisKategoria
    ? termekLista.filter((adat) => adat.category === aktualisKategoria)
    : termekLista;

  return (
    <div>
      {}
      <div className="mb-4">
        <label htmlFor="categoryFilter" className="form-label">
          Szűrés kategória szerint:
        </label>
        <select
          id="categoryFilter"
          className="form-select"
          value={aktualisKategoria}
          onChange={(e) => setAktualisKategoria(e.target.value)}
        >
          <option value="">Összes</option>
          {kategoriaLista.map((kategoria, index) => (
            <option key={index} value={kategoria}>
              {kategoria}
            </option>
          ))}
        </select>
      </div>

      {}
      <div className="row">
        {szurtTermekLista.map((adat) => (
          <div key={adat.id} className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card h-100 shadow-sm">
              <img
                src={adat.image}
                alt={adat.title}
                className="card-img-top"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain", 
                  borderRadius: "8px",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{adat.title}</h5>
                <p className="card-text">Ár: {adat.price} Ft</p>
                <p className="card-text">Darabszám: {adat.rating.count}</p> {}
                <button
                  onClick={() => kosarba(adat)} 
                  className="btn btn-primary mt-auto"
                >
                  Kosárba tesz
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
