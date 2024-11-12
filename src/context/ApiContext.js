
import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);
  const [katlista, setKatlista] = useState([])
  const getAdat = async (vegpont, callcackFv) => {
    try {
      const response = await myAxios.get(vegpont);
      callcackFv([...response.data]);
    } catch (err) {
      // handle error
      console.log("Hiba történt");
    } finally {
    }
  };

  const postAdat = async (vegpont,adat) => {
    try {
      const response = await myAxios.post(vegpont,adat);
      setTermekLista(response);
    } catch (err) {
      // handle error
      console.log("Hiba történt");
    } finally {
    }
  }

  useEffect(() => {
    getAdat("/products",setTermekLista)
    getAdat("/products/categories",setKatlista)

  },
   []);
return (
  <ApiContext.Provider value={{ termekLista, postAdat}}>{children}</ApiContext.Provider>
);

}
