import { DevBySeniority } from "../iDevBySeniority";
import { Junior, Semisenior, Senior } from "../seniority";
import { Profiles as Dev } from "../Profiles";
import { Layer, LayerOptions } from "../types";

/**
 * ### CONCRETE FACTORY
 * Crea perfiles BACKEND con diferentes seniorities.
 */
export class Backend implements DevBySeniority {
	public static layer: Layer = {
		name: LayerOptions.backend ,
		techstack: ['PHP Laravel', 'Node', 'MySQL']
	}

	public createJunior(): Junior {
			return new Dev.BackendJunior(Backend.layer);
	}

	public createSemisenior(): Semisenior {
		return new Dev.BackendSemisenior(Backend.layer);
	}

	public createSenior(): Senior {
		return new Dev.BackendSenior(Backend.layer);
	}

}
