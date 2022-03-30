import { DevBySeniority } from "./iDevBySeniority";
import { Backend } from "./layers/Backend";
import { Frontend } from "./layers/Frontend";
import { Profile } from "./types";

/**
 * La clase creadora (abstract factory) usa un tipo genérico que extiende de DevBySeniority
 * para evitar este tipo de inconsistencias: 
 * ```
 * const creator = new Creator();
 * const backendProfiles = creator.getDevProfile(new Frontend())
 * console.log('Ouh!, La idea era crear un Backend, pero hice algo mal', backendProfiles)
 * ```
 * *Es útil ya que Backend y Frontend agregan atributos propios.*
 */

export class Creator <T extends DevBySeniority>{

	/**
	 * Esta función devuelve información de perfiles backend y frontend
	 * 
	 * @param developer DevBySeniority
	 */
	public getDevProfile(developer: T): Profile[] {
		const juniorProfile = developer.createJunior();
		const semiseniorProfile = developer.createSemisenior();
		const seniorProfile = developer.createSenior();
	
		return [juniorProfile.getProfile(), semiseniorProfile.getProfile(), seniorProfile.getProfile()];
	}
}

const creatorB = new Creator<Backend>();
const backendProfiles = creatorB.getDevProfile(new Backend())
localStorage.setItem('Backend', JSON.stringify(backendProfiles))

const creatorF = new Creator<Frontend>();
const frontendProfiles = creatorF.getDevProfile(new Frontend())
localStorage.setItem('Frontend', JSON.stringify(frontendProfiles))