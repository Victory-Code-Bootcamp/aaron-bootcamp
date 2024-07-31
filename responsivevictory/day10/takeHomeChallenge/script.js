
async function fetchPokemon() {
    const pokemonName = document.getElementById('pokemonInput').value.toLowerCase();
        try {
            // Make a request to the Pokémon API
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                    
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
                    
            // Convert the response to JSON
            let pokemonData = await response.json();
                    
            // Display the name of the Pokémon in an alert
            alert(`You chose: ${pokemonData.name}`);
                    
            // Display the name of the Pokémon in the <p> element
            document.getElementById('pokemonName').textContent = `Pokémon Name: ${pokemonData.name}`;
        } catch (error) {
                // Handle any errors
                alert(error.message);
                document.getElementById('pokemonName').textContent = '';
            }
}