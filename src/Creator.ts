import { DevBySeniority } from "./iDevBySeniority";
import { Backend } from "./layers/Backend";
import { Frontend } from "./layers/Frontend";
import { Profile } from "./types";

export class Creator {

	/**
	 * Esta función devuelve información de perfiles backend y frontend
	 * 
	 * @param developer DevBySeniority
	 */
	public getDevProfile(developer: DevBySeniority): Profile[] {
		const juniorProfile = developer.createJunior();
		const semiseniorProfile = developer.createSemisenior();
		const seniorProfile = developer.createSenior();
	
		return [juniorProfile.getProfile(), semiseniorProfile.getProfile(), seniorProfile.getProfile()];
	}
}

const creator = new Creator();

const backendProfiles = creator.getDevProfile(new Backend())
localStorage.setItem('Backend', JSON.stringify(backendProfiles))

const frontendProfiles = creator.getDevProfile(new Frontend())
localStorage.setItem('Frontend', JSON.stringify(frontendProfiles))