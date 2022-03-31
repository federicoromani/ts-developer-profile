import { Profile, SenioriryOptions, Seniority } from "../types";
import readOnly from "../decorators/constructorReadOnly";

/**
 * ### ABSTRACT PRODUCT:
 * Define las caracteristicas de un desarrollador Semisenior
 */
@readOnly
export abstract class Semisenior {
	// TODO: agregar rango salarial
	constructor(private experience: string = '2-6 años'){
	};

	public get devSeniority(): Seniority {
		return { experience: this.experience, category: SenioriryOptions.ssr }
	}

	abstract getProfile(): Profile;
}