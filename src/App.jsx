// "wrappear" nuestra aplicación dentro del provider.
import Grilla from "./components/Grilla";
import "./App.css";

export default function App() {
  // Creamos una nueva instancia del cliente.

  return (
    // Ponemos el provider por encima de nuestra aplicación y le
    // pasamos el cliente que creamos.
    <div className="App">
      <h1>¡Rick & Morty!</h1>
      <Grilla />
    </div>
  );
}