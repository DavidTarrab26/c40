import logo from './logo.svg';
import './App.css';
import Personajes from './componente/personajes/Personajes';
import Nav from './componente/Nav/Nav';
import Portada from './componente/Portada/Portada';

function App() {
  return (
    <div>
      <Nav />
      <Portada />
      <Personajes />
    </div>
  );
}

export default App;
