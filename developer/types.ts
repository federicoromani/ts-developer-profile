export interface Profile {
	description: string;
	techstack: string[];
	seniority: Seniority;
}

export interface Seniority {
	experience: string;
	category: string;
}