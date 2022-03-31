import { DevByLayer } from "./IDevByLayer";
import { Backend } from "./layers/Backend";
import { Frontend } from "./layers/Frontend";
import { Profile } from "./types";

/**
 * La clase creadora (client) usa un tipo genérico que extiende de DevByLayer. 
 * Esto permite que Backend y Frontend agreguen sus propios atributos evitando inconsistencias
 * 
 * Sin el uso del tipo genérico, podría pasar lo siguiente: 
 * ```
 * const creator = new Creator();
 * const backendProfiles = creator.getDevProfile(new Frontend())
 * console.log('Ouh!, La idea era crear un Backend, pero hice algo mal', backendProfiles)
 * ```
 */

export class Creator <T extends DevByLayer>{

	/**
	 * Esta función devuelve información de perfiles backend y frontend
	 * 
	 * @param developer DevByLayer
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