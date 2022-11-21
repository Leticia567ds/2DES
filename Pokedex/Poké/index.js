const pokemonname = document.querySelector('.pokemon_name');
const number = document.querySelector('.pokemon_number')
const pokemomy = document.querySelector('.pokemon_image');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const aby = document.querySelector('.info2');
const btn =document.querySelector('.btn-prev')
const btnNext =document.querySelector('.btn-next')

let search = 1;


const fetchPokemon = async(pokemon) =>{
 const Api = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

if(Api.status == 200){
    const data = await Api.json();
    return data;
}
}

const renderPokemon = async(pokemon) =>{

    pokemonname.innerHTML = 'Loading...';
    const data = await fetchPokemon(pokemon);
    
    if(data){
        const data = await fetchPokemon(pokemon);
        pokemonname.innerHTML = data.name;
        number.innerHTML = data.id;
        aby.innerHTML = data.height;
        pokemomy.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_dafault'];
        input.value = '';
        search = data.id;
    }else{
        pokemonname.style.display ='none';
        pokemonname.innerHTML = 'Not Found :(';
        number.innerHTML = ''; 
        
    }
}
form.addEventListener('submit', (event) =>{
event.preventDefault();
renderPokemon(input.value.toLowerCase());
})
btn.addEventListener('click', () =>{
    if(search >1){
        search -=1;
        renderPokemon(search);
    }
   
 })
 btnNext.addEventListener('click', () =>{
    search +=1;
    renderPokemon(search);
   })
renderPokemon(search);