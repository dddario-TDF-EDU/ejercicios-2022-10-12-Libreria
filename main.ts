import { Cliente } from "./claseCliente";
import { Revista } from "./claseRevista";
import { Libro } from "./claseLibro";
import { Libreria } from "./claseLibreria";

let autores = ['Pedro','Rosa','Juan','Araceli'];
let cliente1:Cliente=new Cliente('Juan','Perez',11111,'Velez Sarfield');
let cliente2:Cliente=new Cliente('Hernan','Rodriguez',112212,'Nuñez');
let libro1:Libro=new Libro('Campanita',50,'Pedro',200,'Comedia','sadfasdasdasdasdsad');
let libro2:Libro=new Libro('iron man',150,'Juan',300,'Drama','asfasdadqdq');
let revista1:Revista=new Revista('Para ti',20,'Rosa',20,5,2022);
let revista2:Revista=new Revista('Oeste',15,'Araceli',12,4,2021);
let arregloCliente:Cliente[]=[cliente1,cliente2];
let arregloLibro:Libro[]=[libro1,libro2];
let arregloRevista:Revista[]=[revista1,revista2];
let libreria1:Libreria=new Libreria(arregloCliente,arregloLibro,arregloRevista);

let primerPrecio=libreria1.calcularPrecio(cliente1,libro1);
console.log(libreria1.comprar("campanita",11111));
console.log(primerPrecio);
console.log(libreria1.leGustaLibro("iron man",11111));
console.log(libreria1.leGustaLibroEstricto("iron man",11111));
console.log(cliente1.getListaAutoresFavoritos())
try {
    let generosUndefined: string;
    cliente1.addGeneroFavorito(generosUndefined);
} catch (error){
    let generos= ['Drama','Terror','Comedia','Vaqueros'];
    cliente1.addGeneroFavorito(generos[1]);
}

console.log(cliente1.getListaGeneroFavoritos());




