import {useQuery} from "react-query"
import { obtenerPersonajes } from '../service/personajes';
import TarjetaPersonaje from "./TarjetaPersonaje";

const Grilla = () => {


  const { data, isLoading, error, isIdle, refetch } = useQuery("obtenerPersonajes", obtenerPersonajes, {
    // enabled:false
  })

  // if (isIdle) {
  //   return <button onClick={refetch}>Cargar Datos</button>
  // }

  // Si se esta fetcheando la data, mostramos un mensaje de carga.
  if (isLoading) return <div>Cargando personajes...</div>;

  // Si ocurrió un error en el request, mostramos un mensaje en la pantalla.
  if (error)
    return (
      <div>
        Ups, no podemos cargar los personajes en este momento. Por favor intenta
        nuevamente más tarde
      </div>
    );

  // Una vez que tenemos la información de la API, renderizamos las tarjetas
  // de cada personaje.
  return data?.results?.length
    ? data.results.map((personaje) => (
        <TarjetaPersonaje
          key={personaje.id}
          imagen={personaje.image}
          nombre={personaje.name}
          especie={personaje.species}
        />
      ))
    : null;
};

export default Grilla;
