import { useContext } from 'react';
import './App.css';
import Kosar from './component/Kosar';
import Vasarloter from './component/Vasarloter';
import { ApiContext } from './context/ApiContext';
import { KosarContext } from './context/KosarContext';


function App() {
  const {termekLista}= useContext(ApiContext)
  const {kosarLista}= useContext(KosarContext)

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
        <h4>Vásárlótér</h4></article>
        <Vasarloter termekLista={termekLista}/>
        </main>
    </div>
  );
}

export default App;
