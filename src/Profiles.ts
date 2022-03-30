import { Junior, Semisenior, Senior } from "./seniority";
import { Layer, Profile } from "./types";
/**
 * Contiene las clases de todos los perfiles posibles
 */
export namespace Profiles {
	// BACKEND
	export class BackendJunior extends Junior {
		constructor(public layer: Layer){	
			super();
		}
		/**
		 * Implementa el método abstracto de {@linkcode Junior.getProfile}
		 */
		public getProfile(): Profile {
			return {
				description: this.layer.name,
				techstack: this.layer.techstack,
				seniority: this.devSeniority
			};
		}
	}

	export class BackendSemisenior extends Semisenior {
		constructor(public layer: Layer){	
			super();
		}
		/**
		 * Implementa el método abstracto de {@linkcode Semisenior.getProfile}
		 */
		public getProfile(): Profile {
			return {
				description: this.layer.name,
				techstack: this.layer.techstack,
				seniority: this.devSeniority
			};
		}
	}

	export class BackendSenior extends Senior {
		constructor(public layer: Layer){	
			super();
		}
		/**
		 * Implementa el método abstracto de {@linkcode Senior.getProfile}
		 */
		public getProfile(): Profile {
			return {
				description: this.layer.name,
				techstack: this.layer.techstack,
				seniority: this.devSeniority
			};
		}
	}

	// FRONTEND
	export class FrontendJunior extends Junior {
		constructor(public layer: Layer){	
			super();
		}
		/**
		 * Implementa el método abstracto de {@linkcode Junior.getProfile}
		 */
		public getProfile(): Profile {
			return {
				description: this.layer.name,
				techstack: this.layer.techstack,
				seniority: this.devSeniority
			};
		}
	}

	export class FrontendSemisenior extends Semisenior {
		constructor(public layer: Layer){	
			super();
		}
		/**
		 * Implementa el método abstracto de {@linkcode Semisenior.getProfile}
		 */
		public getProfile(): Profile {
			return {
				description: this.layer.name,
				techstack: this.layer.techstack,
				seniority: this.devSeniority
			};
		}
	}

	export class FrontendSenior extends Senior {
		constructor(public layer: Layer){	
			super();
		}
		/**
		 * Implementa el método abstracto de {@linkcode Senior.getProfile}
		 */
		public getProfile(): Profile {
			return {
				description: this.layer.name,
				techstack: this.layer.techstack,
				seniority: this.devSeniority
			};
		}
	}
}
