class Animal {
    //private, public, protected
    constructor(protected _nombre:string) {
    }

    setNombre(nombre:string):void{
        this._nombre = nombre
    }

    getNombre():string{
        return this._nombre
    }

    get nombre():string{
        return this._nombre
    }

    set nombre(nombre:string){
        this._nombre = nombre;
    }

}