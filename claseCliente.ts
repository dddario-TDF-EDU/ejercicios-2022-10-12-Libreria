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
    public getApellido():string{
        return this.apellido;
    }
    public getDNI():number{
        return this.DNI;
    }
    public getDireccion():string{
        return this.direccion;
    }
    public getListaAutoresFavoritos(): string[] {
        return this.listAutorFav;
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
        this.addAutorFavorito(paramAutor);
        this.addGeneroFavorito(paramGenero);
    }

    private addAutorFavorito(paramAutor: string): void {
        for(let i = 0; i < this.listAutorFav.length; i++) {
            if(paramAutor === this.listAutorFav[i]) {
                return
            }
        }
        this.listAutorFav.push(paramAutor)
    }

    private addGeneroFavorito(paramGenero: string): void {
        for(let i = 0; i < this.listGenFav.length; i++) {
            if(paramGenero === this.listGenFav[i]) {
                return
            }
        }
        this.listGenFav.push(paramGenero)
    }

}
