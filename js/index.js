const container = document.querySelector(".carta")
container.classList.add('remove')
const error = document.querySelector(".error")
function Consultar(event, form){
    event.preventDefault()
    const nome = form.nome
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome.value.toLowerCase()}`)
        .then(response => response.json())
        .then(data => {
            Carta(data)
            error.innerHTML = ""
            container.classList.remove('remove')
            container.classList.add('add')
        })
        .catch(Error())
}
function Carta(pok){
    const carta = 
        "<h2>"+pok.species.name+"</h2>"+
        "<div class='img-card'>"+
            "<img class='pokemon' src='"+pok.sprites.other.dream_world.front_default+"'/>"+
        "</div>"+
        "<p class='hp'>"+
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">'+
            '<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>'+
        '</svg>'+
        " HP: "+pok.stats[0].base_stat+"</p>"+
        "<p class='attack'>"+
        "<img class='icon' src='img/noun_Sword_8437.png' alt='pokemon'/>"+
        "Attack: "+pok.stats[1].base_stat+"</p>"+
        "<p class='defense'>"+
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-fill" viewBox="0 1 16 16">'+
            '<path d="M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>'+
        '</svg>'+
        " Defense: "+pok.stats[2].base_stat+"</p>"
    container.innerHTML = carta
}
function Error(){
    const erro = 
        "<p class='error'>Erro no nome do Pokemon, digite novamente.</p>"
    error.innerHTML = erro
    container.classList.add('remove')
}

