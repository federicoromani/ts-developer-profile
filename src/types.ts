export interface Profile {
	description: string;
	techstack: string[];
	seniority: Seniority;
}

export interface Seniority {
	experience: string;
	category: SenioriryOptions;
}

export interface Layer {
	name: LayerOptions;
	techstack: string[];
}

export enum LayerOptions {
	backend = 'Backend',
	frontend = 'Frontend'
}

export enum SenioriryOptions {
	jn = 'Junior',
	ssr = 'Semisenior',
	sr = 'Senior'
}