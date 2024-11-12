import './App.css';
import Urlap from './component/Urlap';
import Admin  from './pages/Admin';


function App() {

  return (
    <div className="container">
      <header className="">
        <h1>Fakestore webáruház</h1>
      </header>
      <main>
        <Urlap/>
        <Admin/>
      </main>
    </div>
  );
}

export default App;
