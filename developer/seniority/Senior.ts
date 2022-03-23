import { Developer } from "../index.";
import { Backend } from "../layers/Backend";
import { Frontend } from "../layers/Frontend";
import { Profiles as Dev } from "../profiles";
import { Seniority } from "../types";

export class Senior implements Developer {
	private static seniority: Seniority = {
		experience: '+6 years',
		category: 'SR'
	}

	public createBackend(techstack: string[]): Backend {
			return new Dev.SeniorBackend(Senior.seniority, techstack);
	}

	public createFrontend(techstack: string[]): Frontend {
			return new Dev.SeniorFrontend(Senior.seniority, techstack);
	}
}
