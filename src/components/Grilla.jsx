import {useQuery} from "react-query";
import {obtenerPersonajes} from "../service/personajes";
import TarjetaPersonaje from "./TarjetaPersonaje";

const Grilla = () => {
	const {data, isLoading, error} = useQuery(
		"obtenerPersonajes",
		obtenerPersonajes
	);

	const incrementarPagina = () => {
		console.log("incrementar pagina");
	};

	const disminuirPagina = () => {
		console.log("decrementar pagina");
	};

	if (isLoading) return <div>Cargando personajes...</div>;

	if (error)
		return (
			<div>
				Ups, no podemos cargar los personajes en este momento. Por favor intenta
				nuevamente más tarde
			</div>
		);

	return (
		<div>
			<div id="botones">
				<button onClick={disminuirPagina}>Anterior</button>
				<button onClick={incrementarPagina}>Siguiente</button>
			</div>
			{data?.results?.length
				? data.results.map((personaje) => (
						<TarjetaPersonaje
							key={personaje.id}
							imagen={personaje.image}
							nombre={personaje.name}
							especie={personaje.species}
						/>
				  ))
				: null}
		</div>
	);
};

export default Grilla;
