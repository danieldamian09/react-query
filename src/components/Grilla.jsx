import { useState } from 'react';
import {useQuery} from "react-query";
import {obtenerPersonajes} from "../service/personajes";
import TarjetaPersonaje from "./TarjetaPersonaje";

const Grilla = () => {

	const [pagina, setPagina] = useState(1)

	const {data, isLoading, error} = useQuery(
		["obtenerPersonajes", pagina],
		() => obtenerPersonajes(pagina),
		{
			// placeholderData:{results:[{id:1, name:"Daniel", species:"Humano"}]},
			keepPreviousData: false,
			initialData:{results:[{id:1, name:"Daniel", species:"Humano"}]},
		}
	);

	const incrementarPagina = () => {
		setPagina((prevPagina) => Math.min(prevPagina + 1, data?.info?.pages))
	};

	const disminuirPagina = () => {
		setPagina((prevPagina) => Math.max(prevPagina - 1, 1))
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
