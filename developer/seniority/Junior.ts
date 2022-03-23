import { Developer } from "../index.";
import { Backend } from "../layers/Backend";
import { Frontend } from "../layers/Frontend";
import { Profiles as Dev } from "../profiles";
import { Seniority } from "../types";

export class Junior implements Developer {
	private static seniority: Seniority = {
		experience: '1-2 years',
		category: 'JN'
	}

	public createBackend(techstack: string[]): Backend {
			return new Dev.JuniorBackend(Junior.seniority, techstack);
	}

	public createFrontend(techstack: string[]): Frontend {
			return new Dev.JuniorFrontend(Junior.seniority, techstack);
	}
}
