/**
 * Este decorador impide la edición de las propiedades del constructor de la clase.
 * @param constructor
 */
export default function( constructor: Function ) {
	Object.seal(constructor);
	Object.seal(constructor.prototype);
}