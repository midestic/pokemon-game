

# Pokémon Search App 🕵️‍♂️✨

A fun and interactive Pokémon search app built with HTML, CSS, and JavaScript! Enter a Pokémon name to fetch and display its image from the PokéAPI. Perfect for learning about API integration and DOM manipulation.

  Demo
Type in a Pokémon name (like "pikachu" or "charizard") to fetch its official image instantly!

  Features
-  Search Functionality : Find any Pokémon by name.
-  Live Image Display : View Pokémon images directly from the PokéAPI.
-  Error Handling : Alerts if the Pokémon name is invalid or the API can’t retrieve data.

  Technologies Used
-  JavaScript : For API requests and dynamic content handling.
-  HTML/CSS : For structuring and styling the user interface.

  Installation
1. Clone the repository:
    bash
   git clone https://github.com/midestic/pokemon-search-app.git
    
2. Open the project folder and launch `index.html` in your browser.

  Usage
-  Search : Type a Pokémon name into the input box and press  Search .
-  Display : The image appears immediately if the Pokémon is found.

  Code Overview
- `index.html`: Basic structure with an input field, button, and image display area.
- `style.css`: Styles for a clean, centered layout.
- `script.js`: JavaScript to handle API calls, error management, and image display.

  API
This app uses the [PokéAPI](https://pokeapi.co/), an open-source Pokémon database.

  Example Code
 javascript
async function fetchData() {
    let inputData = document.getElementById("textInput").value.toLowerCase();
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputData}`);
        if (!response.ok) throw new Error("Data can't be fetched");

        let data = await response.json();
        document.getElementById("pokeImg").src = data.sprites.front_default;
    } catch (error) {
        console.error(error);
    }
}
 

  Contributing
Feel free to open issues or make pull requests for enhancements or bug fixes!

---

