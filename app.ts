import { Developer } from "./developer/index.";
import { Junior } from "./developer/seniority/Junior";
import { Semisenior } from "./developer/seniority/Semisenior";
import { Senior } from "./developer/seniority/Senior";
import { Profile } from "./developer/types";

/**
 * Esta función devuelve información de perfiles backend y frontend
 * 
 * @param developer AbstractFactory
 */
function recruiterIT(developer: Developer): Profile[] {
	/** Genera el perfil de un backend con los stacks tecnológicos requeridos. */
	const backendProfile = developer.createBackend(['PHP Laravel', 'Node', 'MySQL']);
	/** Genera el perfil de un frontend con los stacks tecnológicos requeridos. */
	const frontendProfile = developer.createFrontend(['ES6', 'VueJS', 'TailwindCSS']);
	/** Obtiene el perfil backend requerido. */
	console.log(backendProfile.getProfile());
	/** Obtiene el perfil frontend requerido. */
	console.log(frontendProfile.getProfile());

	return [backendProfile.getProfile(), frontendProfile.getProfile()];
}

console.log('Probando la creación un nuevo perfil Junior...');
const JN = recruiterIT(new Junior());
localStorage.setItem('JN', JSON.stringify(JN));

console.log('Probando la creación un nuevo perfil Semisenior...');
const SSR = recruiterIT(new Semisenior());
localStorage.setItem('SSR', JSON.stringify(SSR));

console.log('Probando la creación un nuevo perfil Senior...');
const SR = recruiterIT(new Senior());
localStorage.setItem('SR', JSON.stringify(SR));

