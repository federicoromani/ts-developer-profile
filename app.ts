import { Developer } from "./developer/index.";
import { Junior } from "./developer/seniority/Junior";
import { Semisenior } from "./developer/seniority/Semisenior";
import { Senior } from "./developer/seniority/Senior";

/**
 * Esta función devuelve información de perfiles backend y frontend
 * 
 * @param developer AbstractFactory
 */
function recruiterIT(developer: Developer) {
	/** Genera el perfil de un backend con los stacks tecnológicos requeridos. */
	const backendProfile = developer.createBackend(['PHP Laravel', 'Node', 'MySQL']);
	/** Genera el perfil de un frontend con los stacks tecnológicos requeridos. */
	const frontendProfile = developer.createFrontend(['ES6', 'VueJS', 'TailwindCSS']);
	/** Obtiene el perfil backend requerido. */
	console.log(backendProfile.getProfile());
	/** Obtiene el perfil frontend requerido. */
	console.log(frontendProfile.getProfile());
}

console.log('Probando la creación un nuevo perfil Junior...');
recruiterIT(new Junior());

console.log('Probando la creación un nuevo perfil Semisenior...');
recruiterIT(new Semisenior());

console.log('Probando la creación un nuevo perfil Senior...');
recruiterIT(new Senior());
