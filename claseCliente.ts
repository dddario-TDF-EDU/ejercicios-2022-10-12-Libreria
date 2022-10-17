export class Cliente {
    private nombre:string;
    private apellido:string;
    private DNI:number;
    private direccion:string;
    private listAutorFav:string[];
    private listGenFav:string[];
    private descuento:number;
    private compras: string[];

    public constructor(pNombre:string,pApellido:string,pDNI:number,pDireccion:string,pListAutorFav:string[],pListGenFav:string[],pDescuento:number){
        this.nombre=pNombre;
        this.apellido=pApellido;
        this.DNI=pDNI;
        this.direccion=pDireccion;
        this.listAutorFav=pListAutorFav;
        this.listGenFav=pListGenFav;
        this.descuento=pDescuento;
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

    public addCompras(paramCompra: string): void {
        this.compras.push(paramCompra);
    }
}
