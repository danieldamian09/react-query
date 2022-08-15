
//ENDPOINT: "https://rickandmortyapi.com/api/character"
export const obtenerPersonajes = async () => {
  try {
    const respuesta = await fetch("https://rickandmortyapi.com/api/character")
    const json = await respuesta.json()
    return json
  } catch (error) {
    console.log(error)
  }
};