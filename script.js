

async function fetchData() {

    try {
        
        let inputData = document.getElementById("textInput").value.toLowerCase()

        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ inputData }`)


            if(!response.ok) {

                throw new Error(`data cant't be fetched`)
            }


            let data = await response.json();
            let pokemonImage = data.sprites.front_default;
           
            let imgSpace = document.getElementById("pokeImg")
            imgSpace.src = pokemonImage
            imgSpace.style.display = "block"
            

    } catch (error) {

        console.error(error);
        
        
    }

}

