import { Profile, SenioriryOptions, Seniority } from "../types";
import readOnly from "../decorators/constructorReadOnly";

/**
 * ### ABSTRACT PRODUCT:
 * Define las caracteristicas de un desarrollador Senior
 */
@readOnly
export abstract class Senior {
	// TODO: agregar rango salarial
	constructor(private experience: string = '+6 años'){
	};

	public get devSeniority(): Seniority {
		return { experience: this.experience, category: SenioriryOptions.sr }
	}

	abstract getProfile(): Profile;
}