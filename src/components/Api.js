export async function getPokemonList(url) {
  var pokemonData = [];
  var result = {};
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length) {
      for (const pokemon of data.results) {
        const url = pokemon.url;
        const detaiPokemon = await getPokemonDatailByUrl(url);
        pokemonData.push(detaiPokemon);
      }
    }
    result = {
      count: data.count,
      next: data.next,
      previous: data.previous,
      array: pokemonData,
    };
  } catch (error) {
    console.error("Error capturando la Pokemon data", error);
    return null;
  }

  return result;
}

async function getPokemonDatailByUrl(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const id = data.id;
    return {
      id,
      name: data.name,
      image: data.sprites.other["official-artwork"]["front_default"],
    };
  } catch (error) {
    console.error("Error capturando la Pokemon data", error);
    throw error;
  }
}
