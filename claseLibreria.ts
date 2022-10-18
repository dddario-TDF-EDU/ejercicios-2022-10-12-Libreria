import { Cliente } from "./claseCliente";
import { Revista } from "./claseRevista";
import { Libro } from "./claseLibro";
import { Padre } from "./clasePadre";

export class Libreria {
    private listaClientes:Cliente[];
    private listaLibros:Libro[];
    private listaRevistas:Revista[];

    public constructor(pListaClientes:Cliente[],pListaLibros:Libro[],pListaRevista:Revista[]) {
        this.listaClientes = pListaClientes;
        this.listaLibros = pListaLibros;
        this.listaRevistas = pListaRevista;
    }
    
    public setRevista(nuevaRevista:Revista):void{
        this.listaRevistas.push(nuevaRevista);
    }
    
    public setLibro(nuevoLibro:Libro):void{
        this.listaLibros.push(nuevoLibro);
    }
    
    public setCliente(nuevoCliente:Cliente):void{
        this.listaClientes.push(nuevoCliente);
    }
    
    public calcularPrecio(cliente:Cliente,articulo:Padre):number{
        let precioConDescuento:number=0;
        precioConDescuento=articulo.getPrecio()*(1-cliente.getDescuento());
        return precioConDescuento;
    }
    
    private devolverPrecio(paramNombre: string): number {
        let precioSalida: number = -1;
        for (let index = 0; index < this.listaLibros.length; index++) {
            if(paramNombre.toUpperCase() === this.listaLibros[index].getTitulo().toUpperCase()) {
                precioSalida = Number(this.listaLibros[index].getPrecio());
                return precioSalida;
            }
        }
        for (let index = 0; index < this.listaRevistas.length; index++) {
            if(paramNombre.toUpperCase() === this.listaRevistas[index].getTitulo().toUpperCase()) {
                precioSalida = Number(this.listaRevistas[index].getPrecio());
                return precioSalida;
            }
        }
        return precioSalida;
    }

    private devolverAutor(paramNombre: string): string {
        let autorSalida: string = "";
        for (let index = 0; index < this.listaLibros.length; index++) {
            if(paramNombre.toUpperCase() === this.listaLibros[index].getTitulo().toUpperCase()) {
                autorSalida = this.listaLibros[index].getAutor();
                return autorSalida;
            }
        }
        return autorSalida;
    }

    private devolverIndexCliente(paramDNI: number): number {
        let indexCliente: number = -1;
        for (let index = 0; index < this.listaClientes.length; index++) {
            if(paramDNI === Number(this.listaClientes[index].getDNI())) {
                indexCliente = index;
                return indexCliente;
            }
        }
        return indexCliente;
    }

    private devolverIndexLibro(paramNombre: string): number {
        let indexLibro: number = -1;
        for (let index = 0; index < this.listaLibros.length; index++) {
            if(paramNombre.toUpperCase() === this.listaLibros[index].getTitulo().toUpperCase()) {
                indexLibro = index;
                return indexLibro;
            }
        }
        return indexLibro;
    }

    private compararAutoresFavoritos(paramAutorBuscado: string , paramIndexCliente: number): boolean {
        let hayConcidencia: boolean = false;
        let autoresFavoritos: string[] = this.listaClientes[paramIndexCliente].getListaAutoresFavoritos();
        for (let index = 0; index < autoresFavoritos.length; index++) {
            if(paramAutorBuscado.toUpperCase() === autoresFavoritos[index].toUpperCase()){
                hayConcidencia = true;
                return hayConcidencia;
            }
        }
        return hayConcidencia;
    }

    private compararGenerosFavoritos(paramGeneroBuscado: string , paramIndexCliente: number): boolean {
        let hayConcidencia: boolean = false;
        let generosFavoritos: string[] = this.listaClientes[paramIndexCliente].getListaGeneroFavoritos();
        for (let index = 0; index < generosFavoritos.length; index++) {
            if(paramGeneroBuscado.toUpperCase() === generosFavoritos[index].toUpperCase()) {
                hayConcidencia = true;
                return hayConcidencia;
            }
        }
        return hayConcidencia;
    }

    public comprar(paramNombre: string, paramDNI: number): string {
        let productoComprado: string = "No se compro nada";
        let precio: number = this.devolverPrecio(paramNombre);
        let indexCliente: number = this.devolverIndexCliente(paramDNI);
        let indexLibro: number = this.devolverIndexLibro(paramNombre);
        let paramAutor: string = this.listaLibros[indexLibro].getAutor();
        let paramGenero: string = this.listaLibros[indexLibro].getGenero();
        paramNombre = this.listaLibros[indexLibro].getTitulo();
        if(precio !== -1 && indexCliente !== -1) {
            this.listaClientes[indexCliente].addCompras(paramNombre, paramAutor, paramGenero);
            productoComprado = this.listaClientes[indexCliente].getNombre() + " compro el producto " + paramNombre;
        }

        return productoComprado;
    }
    
    public leGustaLibro(paramNombre: string, paramDNI: number): boolean {
        let consultaLeGusta: boolean = false;
        let indexCliente: number = this.devolverIndexCliente(paramDNI);
        let autorBuscado: string = this.devolverAutor(paramNombre);
        if(indexCliente !== -1 && autorBuscado !== "") {
            if(this.compararAutoresFavoritos(autorBuscado, indexCliente) === true ) {
                consultaLeGusta = true;
                return consultaLeGusta;
            }
        }
        return consultaLeGusta;
    }

    public leGustaLibroEstricto(paramNombre: string, paramDNI: number): boolean {
        let resultadoFinal: boolean = false;
        let consultaLeGustaAutor: boolean = this.leGustaLibro(paramNombre,paramDNI);
        let indexLibro: number = this.devolverIndexLibro(paramNombre);
        if(consultaLeGustaAutor === true && indexLibro !== -1) {
            let consultaLeGustaGenero: boolean = this.compararGenerosFavoritos(this.listaLibros[indexLibro].getGenero(), this.devolverIndexCliente(paramDNI));
            if(consultaLeGustaGenero === true) {
                resultadoFinal = true;
            }
        }
        return resultadoFinal;
    }

}   

