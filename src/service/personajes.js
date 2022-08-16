
//ENDPOINT: "https://rickandmortyapi.com/api/character"
export const obtenerPersonajes = async (pagina) => {
  try {
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
    const json = await respuesta.json()
    return json
  } catch (error) {
    console.log(error)
  }
};