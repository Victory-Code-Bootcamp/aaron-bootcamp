// Arrow function to fetch and display Pokemon data
const fetchPokemon = async () => {
  const pokemonName = document
    .getElementById("pokemonName")
    .value.toLowerCase();

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("Pokemon not found");
    }
    const data = await response.json();
    displayPokemon(data.name);
  } catch (error) {
    alert(error.message);
  }
};

// Arrow function to display the Pokemon name
const displayPokemon = (name) => {
  const pokemonContainer = document.getElementById("pokemonContainer");
  const pokemonNameElement = document.createElement("h1");
  pokemonNameElement.textContent = `The name of the Pokemon is: ${name}`;
  pokemonContainer.innerHTML = ""; // Clear any previous content
  pokemonContainer.appendChild(pokemonNameElement);
};

// Add event listener to the button
document.getElementById("fetchPokemon").addEventListener("click", fetchPokemon);

// Arrow function to change the text of the output div
const changeText = () => {
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = "Button was clicked!";
};

// Add event listener to the button
document
  .getElementById("changeTextButton")
  .addEventListener("click", changeText);
