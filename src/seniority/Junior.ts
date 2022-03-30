import { Profile, SenioriryOptions, Seniority } from "../types";
import readOnly from "../decorators/constructorReadOnly";

/**
 * ### ABSTRACT PRODUCT:
 * Define las caracteristicas de un desarrollador Junior
 */
@readOnly
export abstract class Junior {
	// TODO: agregar rango salarial
	constructor(private experience: string = '1-2 años'){
	};

	public get devSeniority(): Seniority {
		return { experience: this.experience, category: SenioriryOptions.jn }
	}

	abstract getProfile(): Profile;
}
