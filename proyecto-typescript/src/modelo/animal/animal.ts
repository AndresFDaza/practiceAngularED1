export abstract class Animal {
    //private, public, protected
    constructor(protected _nombre:string) {
    }

    setNombre(nombre:string):void{
        this._nombre = nombre
    }

    getNombre():string{
        return this._nombre;
    }

    get nombre():string{
        return this._nombre;
    }

    set nombre(nombre:string){
        if(nombre.length<=3){
            console.log(`El nombre "${nombre}" es muy corto: ${nombre.length} `);
            return;
        }
        this._nombre = nombre;
    }

    abstract desplazar():void

}