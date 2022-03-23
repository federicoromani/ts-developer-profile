import { Backend } from "./layers/Backend";
import { Frontend } from "./layers/Frontend";
import { Seniority, Profile } from "./types";

export namespace Profiles {

	export class JuniorBackend implements Backend {	
		constructor(public seniority: Seniority, public techstack: string[]){	
		}

		public getProfile(): Profile {
				return {
					description: `Desarrollador Backend, ${this.seniority.category}.`,
					techstack: this.techstack,
					seniority: this.seniority
				};
		}
	}

	export class JuniorFrontend implements Frontend {
		constructor(public seniority: Seniority, public techstack: string[]){	
		}

		public getProfile(): Profile {
			return {
				description: `Desarrollador Frontend, ${this.seniority.category}.`,
				techstack: this.techstack,
				seniority: this.seniority
			};
		}
	}

	export class SemiseniorBackend implements Backend {
		constructor(public seniority: Seniority, public techstack: string[]){	
		}

		public getProfile(): Profile {
			return {
				description: `Desarrollador Backend, ${this.seniority.category}.`,
				techstack: this.techstack,
				seniority: this.seniority
			};
		}
	}

	export class SemiseniorFrontend implements Frontend {
		constructor(public seniority: Seniority, public techstack: string[]){	
		}

		public getProfile(): Profile {
			return {
				description: `Desarrollador Frontend, ${this.seniority.category}.`,
				techstack: this.techstack,
				seniority: this.seniority
			};
		}
	}

	export class SeniorBackend implements Backend {
		constructor(public seniority: Seniority, public techstack: string[]){	
		}

		public getProfile(): Profile {
			return {
				description: `Desarrollador Backend, ${this.seniority.category}.`,
				techstack: this.techstack,
				seniority: this.seniority
			};
		}
	}

	export class SeniorFrontend implements Frontend {
		constructor(public seniority: Seniority, public techstack: string[]){	
		}

		public getProfile(): Profile {
			return {
				description: `Desarrollador Frontend, ${this.seniority.category}.`,
				techstack: this.techstack,
				seniority: this.seniority
			};
		}
	}

}