import { Profile } from "../types";

export interface Backend {
	getProfile(): Profile;
}