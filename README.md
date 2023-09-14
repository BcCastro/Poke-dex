# Mi Pokedex ⚡

REQUERIMIENTOS:
- El reto debe duplicar el proyecto del video.
- El CSS está completo pero deben practicar y entender cómo se crearon las cards en este reto.
- La API que se usará es: pokeapi.co
- Crear createPokemonCard: Traer el nombre del pokemon, el id y tipo de pokemon.



PROCESO DE REALIZACIÓN:
- Definición de variables y colores: Se definen las variables y los colores asociados a cada tipo de Pokémon en el objeto colors.

- Obtención de los tipos de Pokémon: Se crea el array main_types utilizando Object.keys(colors) para obtener una lista de los tipos de Pokémon disponibles.

- Obtención de los datos de los Pokémon: La función fetchPokemons se encarga de obtener los datos de los Pokémon. Utiliza un bucle for para iterar desde el número 1 hasta pokemon_count, que se establece en 150. Dentro del bucle, se llama a la función getPokemon pasando el número de cada Pokémon como argumento.

- Obtención de datos de un Pokémon: La función getPokemon recibe un parámetro id que representa el número del Pokémon a obtener. Se construye la URL utilizando el id y se realiza una solicitud HTTP a la API de Pokémon utilizando fetch. Luego, se convierten los datos obtenidos a formato JSON utilizando res.json() y se llama a la función createPokemonCard pasando los datos del Pokémon.

- Creación de tarjetas de Pokémon: La función createPokemonCard se encarga de crear una tarjeta de Pokémon utilizando los datos proporcionados. Se crea un nuevo elemento div y se le asigna la clase "pokemon". Se obtiene el tipo principal del Pokémon comparando sus tipos con los tipos principales definidos en main_types. Se asigna un color al elemento de Pokémon en función de su tipo utilizando el objeto colors. Luego, se crea una cadena de texto pokemonInnerHTML que contiene el HTML para la tarjeta de Pokémon utilizando los datos del Pokémon. Finalmente, se establece pokemonInnerHTML como contenido del elemento pokemonElement y se agrega al contenedor poke_container en el DOM.

- Inicialización de la aplicación: Se llama a la función fetchPokemons para iniciar el proceso de obtención y visualización de los datos de los Pokémon.

En resumen, la aplicación utiliza JavaScript para obtener datos de la API de Pokémon y luego crea y muestra tarjetas de Pokémon en el navegador utilizando el DOM. Se utilizan bucles, funciones asíncronas y llamadas a API para obtener y procesar los datos necesarios.


