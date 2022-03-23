import { Developer } from "../index.";
import { Backend } from "../layers/Backend";
import { Frontend } from "../layers/Frontend";
import { Profiles as Dev } from "../profiles";
import { Seniority } from "../types";

export class Semisenior implements Developer {
	private static seniority: Seniority = {
		experience: '2-6 years',
		category: 'SSR'
	}

	public createBackend(techstack: string[]): Backend {
			return new Dev.SemiseniorBackend(Semisenior.seniority, techstack);
	}

	public createFrontend(techstack: string[]): Frontend {
			return new Dev.SemiseniorFrontend(Semisenior.seniority, techstack);
	}
}