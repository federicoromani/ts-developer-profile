import { DevByLayer } from "../IDevByLayer";
import { Junior, Semisenior, Senior } from "../seniorities";
import { Profiles as Dev } from "../Profiles";
import { Layer, LayerOptions } from "../types";

/**
 * ### CONCRETE FACTORY
 * Crea perfiles FRONTEND con diferentes seniorities.
 */
export class Frontend implements DevByLayer {
	readonly valuable: string = 'English';

	public static layer: Layer = {
		name: LayerOptions.frontend ,
		techstack: ['ES6', 'Typescript', 'VueJS', 'Pinia', 'UnoCSS']
	}

	public createJunior(): Junior {
		return new Dev.FrontendJunior(Frontend.layer);
	}

	public createSemisenior(): Semisenior {
		return new Dev.FrontendSemisenior(Frontend.layer);
	}

	public createSenior(): Senior {
		return new Dev.FrontendSenior(Frontend.layer);
	}

}
