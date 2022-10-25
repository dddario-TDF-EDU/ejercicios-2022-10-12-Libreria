export class Cliente {
    private nombre:string;
    private apellido:string;
    private DNI:number;
    private direccion:string;
    private listAutorFav:string[];
    private listGenFav:string[];
    private descuento:number;
    private compras: string[];

    public constructor(pNombre:string,pApellido:string,pDNI:number,pDireccion:string){
        this.nombre=pNombre;
        this.apellido=pApellido;
        this.DNI=pDNI;
        this.direccion=pDireccion;
        this.listAutorFav=[];
        this.listGenFav=[];
        this.descuento= 0;
        this.compras = [];
    }
    public getNombre():string{
        return this.nombre;
    }

    public setNombre(pNombre: string): void {
        this.nombre = pNombre;
    }

    public setApellido(pApellido): void {
        this.apellido = pApellido
    }

    public getApellido():string{
        return this.apellido;
    }

    public setDNI(pDNI: number): void {
        this.DNI = pDNI;
    }

    public getDNI():number{
        return this.DNI;
    }

    public setDireccion(pDireccion: string): void {
        this.direccion = pDireccion;
    }

    public getDireccion():string{
        return this.direccion;
    }

    public addAutorFavorito(paramAutor: string): boolean {
        let ingresaAutor: boolean = false;
        for(let i = 0; i < this.listAutorFav.length; i++) {
            if(paramAutor === this.listAutorFav[i]) {
                return ingresaAutor;
            }
        }
        this.listAutorFav.push(paramAutor);
        ingresaAutor = true
        return ingresaAutor;
    }

    public getListaAutoresFavoritos(): string[] {
        return this.listAutorFav;
    }

    public addGeneroFavorito(paramGenero: string): boolean {
        let ingresaGenero: boolean = false;
        for(let i = 0; i < this.listAutorFav.length; i++) {
            if(paramGenero === this.listAutorFav[i]) {
                return ingresaGenero;
            }
        }
        this.listAutorFav.push(paramGenero);
        ingresaGenero = true
        return ingresaGenero;
    }

    public getListaGeneroFavoritos(): string[] {
        return this.listGenFav;
    }

    public getDescuento(): number {
        return this.descuento;
    }

    public getCompras() : string[] {
        return this.compras;
    }

    public addCompras(paramCompra: string, paramAutor: string, paramGenero: string): void {
        this.compras.push(paramCompra);
        this.addAutorFavoritoPorCompra(paramAutor);
        this.addGeneroFavoritoPorCompra(paramGenero);
    }

    private addAutorFavoritoPorCompra(paramAutor: string): void {
        for(let i = 0; i < this.listAutorFav.length; i++) {
            if(paramAutor === this.listAutorFav[i]) {
                //esto no se ve bien, pero creo q funciona, podria usar un break?
                return
            }
        }
        this.listAutorFav.push(paramAutor)
    }

    private addGeneroFavoritoPorCompra(paramGenero: string): void {
        for(let i = 0; i < this.listGenFav.length; i++) {
            if(paramGenero === this.listGenFav[i]) {
                //esto no se ve bien, pero creo q funciona, podria usar un break?
                return
            }
        }
        this.listGenFav.push(paramGenero)
    }

}
