"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    //private, public, protected
    function Animal(_nombre) {
        this._nombre = _nombre;
    }
    Animal.prototype.setNombre = function (nombre) {
        this._nombre = nombre;
    };
    Animal.prototype.getNombre = function () {
        return this._nombre;
    };
    Object.defineProperty(Animal.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            if (nombre.length <= 3) {
                console.log("El nombre \"" + nombre + "\" es muy corto: " + nombre.length + " ");
                return;
            }
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
exports.Animal = Animal;
