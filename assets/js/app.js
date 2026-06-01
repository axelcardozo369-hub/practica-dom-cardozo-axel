const personajes = [
  { id: 1, nombre: "A-Bomb", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg" },
  { id: 2, nombre: "Abe Sapien", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg" },
  { id: 3, nombre: "Abin Sur", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg" },
  { id: 4, nombre: "Abomination", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg" },
  { id: 5, nombre: "Abraxas", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg" }
];
const galeria = document.getElementById("galeria");
function listaPersonajes(lista){
  galeria.innerHTML = "";
  lista.forEach(function({id,nombre,imagen}){
    const card = `
    <div class="col">
                <div class="card h-100 bg bg-dark">
                    <img src="${imagen}" class="card-img-top" alt="${nombre}">
                    <div class="card-body text-center">
                        <h5 class="card-title text-warning fw-bold">${nombre}</h5>
                        <button class="btn btn-danger btn-sm" onclick="eliminar(${id})">
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
            `;
            galeria.innerHTML += card;
  });
}
document.addEventListener("DOMContentLoaded", function(){
  listaPersonajes(personajes);
});
const btnFiltrar = document.getElementById("btnFiltrar");
const inputFiltro = document.getElementById("inputFiltro");
btnFiltrar.addEventListener("click",function(){
  const buscarTexto = inputFiltro.value.toLowerCase();
  const resultado = personajes.filter(function(personaje){
    return personaje.nombre.toLocaleLowerCase().includes(buscarTexto);
  });
  listaPersonajes(resultado);
});
function eliminar(id){
  const indice = personajes.findIndex(function(p){
    return p.id===id;
  });
  personajes.splice(indice,1);
  listaPersonajes(personajes);
}
const btnAgregar = document.getElementById("btnAgregar");
const inputImagen = document.getElementById("inputImagen");
const inputNombre = document.getElementById("inputNombre");

btnAgregar.addEventListener("click",function(){
  const nombre = inputNombre.value.trim();
  const imagen =inputImagen.value.trim();
  
})