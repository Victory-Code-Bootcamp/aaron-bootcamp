// Arrow function to fetch and display Pokemon data
const getPokemon = async () => {
  // Get the Pokemon name from the input field
  const pokemonName = document
    .getElementById("pokemonName")
    .value.toLowerCase();

  try {
    // Make the request to the Pokemon API
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    // Check if the response is ok
    if (!response.ok) {
      throw new Error("Pokemon not found");
    }

    // Convert the response to JSON
    const data = await response.json();

    // Display the name of the Pokemon in an alert
    alert(`The name of the Pokemon is: ${data.name}`);
  } catch (error) {
    alert(error.message);
  }
};
