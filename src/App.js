import { useContext } from 'react';
import './App.css';
import Kosar from './component/Kosar';
import Vasarloter from './component/Vasarloter';
import { ApiContext } from './context/ApiContext';
import { KosarContext } from './context/KosarContext';
import { SzuresContext } from './context/SzuresContext';
import Szurt from './component/Szurt';


function App() {
  const {termekLista}= useContext(ApiContext)
  const {kosarLista}= useContext(KosarContext)
  const {szurtLista}= useContext(SzuresContext)
  return (
    <div className="container">
      <header className="">
        <h1>Fakestore webáruház</h1>
      </header>
      <main className="row">
      <aside className="col-lg-4">
        <h4>Kosár</h4>
        <Kosar kosarLista={kosarLista}/>
        </aside>

        <article className="col-lg-8 row">
        <div class="szuro">
            <h3>Szűrés név szerint</h3>
            <div class="mb-3 mt-3">
              <input type="text" class="form-control" id="sznev" name="sznev" />
              <Szurt szurtLista={szurtLista} />
              </div>
            </div><h4>Vásárlótér</h4></article>
        <Vasarloter termekLista={termekLista}/>
        </main>
    </div>
  );
}

export default App;
