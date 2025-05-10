import "./App.css";
import Quadrado1 from "./components/quadrado-1/quadrado-1";
import Quadrado2 from "./components/quadrado-2/quadrado-2";
import Quadrado3 from "./components/quadrado-3/quadrado-3";
import Quadrado4 from "./components/quadrado-4/quadrado-4";

function App() {
  return (
    <div className="App">
      <div className="titulo">
        <h1>Quadrados</h1>
      </div>
      <Quadrado1  />
      <Quadrado2  />
      <Quadrado3 />
      <Quadrado4  />
    </div>
  );
}

export default App;
