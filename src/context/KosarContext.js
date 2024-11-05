import { createContext, useState, } from "react";

export const KosarContext = createContext("");

export const KosarProvider = ({ children }) => {
    const [kosarlista, setkosarlista] = useState([]);

    function kosarba(adat) {
      const skosarLista = [...kosarlista];
      skosarLista.push(adat);
      setkosarlista([...skosarLista]);
    }
  
return (
  <KosarContext.Provider value={{ kosarlista, kosarba}}>{children}</KosarContext.Provider>
);

}