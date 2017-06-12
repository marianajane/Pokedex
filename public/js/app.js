$.getJSON("http://pokeapi.co/api/v2/pokemon/", 
	function (response) {
	var pokemons = response.results;
	crearPokemons(pokemons);
});

function crearPokemons(pokemons) {
	var ul = document.getElementById("pokemons");

	pokemons.forEach(function (pokemon) {
		var li = document.createElement("li");
		li.textContent = pokemon.name;
		console.log(pokemon);
		ul.appendChild(li);
	});
};

var pokemones= [
	{
		"src":"img/bulbasaur.png"
	},
	{
		"src":"img/ivysaur.png"
	},
	{
		"src":"img/venusaur.png"
	},
	{
		"src":"img/charmander.png"
	},
	{
		"src":"img/charmeleon.png"
	},
	{
		"src":"img/charizard.png"
	},
	{
		"src":"img/squirtle.png"
	},
	{
		"src":"img/wartortle.png"
	},
	{
		"src":"img/blastoise.png"
	},
	{
		"src":"img/caterpie.png"
	},
	{
		"src":"img/metapod.png"
	},
	{
		"src":"img/butterfree.png"
	},
	{
		"src":"img/weedle.png"
	},
	{
		"src":"img/kakuna.png"
	},
	{
		"src":"img/beedrill.png"
	},
	{
		"src":"img/pidgey.png"
	},
	{
		"src":"img/pidgeotto.png"
	},
	{
		"src":"img/pidgeot.png"
	},
	{
		"src":"img/rattata.png"
	},
	{
		"src":"img/raticate.png"
	}
];

function cargarPagina(){
  var plantillaPokemons =
    '<section class="col s3">' +
      '<a href="#modal1"><img data-pokemon="__data__" class="img-pokemons" src="__imagen__" alt=""></a>'  +
      '<h5>__nombre__</h5>' +
    '</section>';


 $.getJSON("http://pokeapi.co/api/v2/pokemon/", function(response){
    var pokemons = response.results;
    nombrePokemones(pokemons, pokemones);
  });

  var nombrePokemones = function(pokemons, pokemones){
    var $contenedor = $("#contenedorPokemons");
    var plantillaFinal = "";
    pokemons.forEach(function(pokemon, indice){
      plantillaFinal += plantillaPokemons.replace("__nombre__", pokemon.name)
                          .replace("__imagen__", pokemones[indice].src)
   });
      $contenedor.html(plantillaFinal);
  };

   $('.modal').modal();
};

$(document).ready(cargarPagina);





