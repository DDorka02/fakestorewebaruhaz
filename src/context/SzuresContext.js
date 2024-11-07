import { createContext, useState, } from "react";

export const SzuresContext = createContext("");

export const SzuresProvider = ({ children }) => {
    const [szurtlista, setszurtlista] = useState([]);
    
    function szuresNevSzerint() {
        //const szuroElem = $("#sznev");
        //szuroElem.on("keyup", function () {
       //   let szoveg = szuroElem.val();
       //   init(szures(VIRAG, szoveg));
       // });
      }
  
return (
  <SzuresContext.Provider value={{ szurtlista, szuresNevSzerint }}>{children}</SzuresContext.Provider>
);

}