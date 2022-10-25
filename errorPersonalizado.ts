class ErrorPersonalizado extends Error {
    constructor(pMensaje: string) {
        super(pMensaje);
        this.name = "ErrorPersonalizado";
    }
}