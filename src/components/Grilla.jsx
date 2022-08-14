// Aquí nos importamos useQuery para poder utilizarlo en el componente.
// Además, importamos la función que creamos para manejar el pedido a la API.
import TarjetaPersonaje from "./TarjetaPersonaje";

// Hasta ahora, estamos usando data hardcodeada para
//renderizar los personajes. El ojetivo del ejercicio
// es poder emplear useQuery para traernos esa data
// de la API de Rick & Morty. Podrás encontrar el endpoint
// a utilizar en el archivo personajes.js que se encuentra
//dentro de la capreta "servicios"
const data = {
  results: [
    {
      id: 1,
      name: "Rick Sanchez",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    }
  ]
};
const isLoading = false;
const error = null;

const Grilla = () => {
  // Utilizamos useQuery, pasandole como primer argumento un string
  // que indica el nombre de nuestra query (esto lo usa para manejar el cache),
  // y como segundo argumento le pasamos la función que creamos para realizar el
  // request a la API.
  // Aprovechamos las ventajas de destructuring para traernos la data (respuesta de la API),
  // el estado de isLoaading y el error.

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
