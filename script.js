/*Esta constante es la enncargada de obtener el contenedor de los Pokémon desde el HTML*/
const pokeContainer = document.getElementById('poke-container');

/*Número total de Pokémon a obtener (este dato se pasa en la linea 31 para decirle a la API de pokemon que traiga 150 datos de pokemones)*/
const pokemonCount = 150;

/*Colores asociados a cada tipo de Pokémon*/
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};

/*Obtener los tipos de Pokémon disponibles*/
const mainTypes = Object.keys(colors);
console.log(mainTypes); /*Muestra el objeto key: value > tipos de Pokémon en la consola*/

/*Función para obtener los Pokémon (esta funcion dentro de si ejecuta la funcion de la linea 37 varias veces (una por cada pokemon)*/
const fetchPokemons = async () => {
    for (let i = 1; i <= pokemonCount; i++) {
		/*al ejecutarse esta funcion se ejecutara una vez por cada pokemon (ver linea 38)*/
        await getPokemon(i);
    }
};

/*Función para obtener un Pokémon específico de la API (esta funcion retorna data > data es la información del pokemon como nombre, id, type, habilidades, etc*/
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data);
};

/*/Función para crear la tarjeta de un Pokémon*/
const createPokemonCard = (pokemon) => {
    /*Crea un elemento div para la tarjeta del Pokémon*/
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');

    // Obtener los tipos de Pokémon y el color correspondiente
	// en la linea 55 se utiliza pokemon.types.map para recorrer la información del tipo de pokemon (agua, fuego, hierba, etc) esto se hace porque pokemon.types es un objeto con mas de un valor)
	// al recorrer pokemon.types usando map ejecuta un callback llamado type osea type seria el pokemon recorrido en esa interracion (recorrido sobre la lista de pokemones)
	// y por cada recorrido guardara el nombre del tipo de pokemon dentro de pokemonTypes
    const pokemonTypes = pokemon.types.map(type => type.type.name);

	/** 
		Esta línea se encarga de determinar el tipo de un Pokémon y obtener el color correspondiente basado en ese tipo.
		mainTypes es un array que contiene los tipos de Pokémon disponibles. Cada tipo está representado como una cadena de texto, como "fire", "grass", "water", etc.
		pokemonTypes es un array que contiene los tipos del Pokémon actual. El objeto pokemon tiene una propiedad types que es otro array, y utilizamos el método map para extraer solo los nombres de los tipos de este array.
		La función find se utiliza en mainTypes para buscar el primer tipo que cumpla con una condición específica. En este caso, la condición es pokemonTypes.indexOf(type) > -1, lo que significa que se busca un tipo que esté presente en el array pokemonTypes.
		El método indexOf busca el índice de un elemento en un array. Si el tipo se encuentra en pokemonTypes, indexOf devolverá su índice en el array. Si no se encuentra, devolverá -1.
		Entonces, find recorre mainTypes y, para cada tipo, verifica si está presente en pokemonTypes utilizando indexOf. Cuando encuentra el primer tipo que cumple con esta condición, lo asigna a la variable type.
		Finalmente, color se obtiene accediendo al objeto colors utilizando type como clave. Por ejemplo, si type es "fire", colors[type] devolverá el color asociado a "fire" en el objeto colors, que es "#FDDFDF". El color se utiliza posteriormente para establecer el fondo de la tarjeta del Pokémon.
	**/
    const type = mainTypes.find(type => pokemonTypes.indexOf(type) > -1);
    const color = colors[type];

    // Establecer el color de fondo de la tarjeta
    pokemonElement.style.backgroundColor = color;

    // Generar el HTML interno de la tarjeta del Pokémon (este codigo se usa para que por cada vez que se ejecute la funcion createpokemoncard dentro de la linea 39, cree una nueva card de un pokemon con los datos especificos de el pokemon que esta iterando en ese momento dentro de el div del html)
	//recordar que esta funcion llamada CreatePokemonCard se ejecutara muchas veces por lo que por cada ejeccucion crea un pokemon diferente con todas las condiciones como los colores.
    const pokemonInnerHTML = `
        <div class="pokemon-image">
            <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}" />
        </div>
        <div class="pokemon-info">
            <span class="pokemon-id">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class="pokemon-name">${pokemon.name}</h3>
            <small class="pokemon-type">Type: <span>${type}</span></small>
        </div>
    `;

    /*Establecer el contenido HTML de la tarjeta (se usa innerHTML para insertar El contenido de html almacenado en la variable pokemon innerhtml dentro del div existen en el archivo index.html*/
    pokemonElement.innerHTML = pokemonInnerHTML;

    /*Agregar la tarjeta del Pokémon al contenedor principal (por un ultimo se usa appendchild para meter el div con la información del pokemon dentro del padre (el div principal del html*/
    pokeContainer.appendChild(pokemonElement);
};

/*e llama la funcion principal que ejecuta todo el codigo ya creado y repite las funciones para Obtener y crear las tarjetas de los Pokémon*/
fetchPokemons();