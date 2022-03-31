 import { Junior } from "./seniorities/Junior";
 import { Semisenior } from "./seniorities/Semisenior";
 import { Senior } from "./seniorities/Senior";
 
 /**
	* ### ABSTRACT FACTORY
	* Define la creación de todos los {@linkcode src/Profiles}
	* @interface
	*/
 export interface DevByLayer {
	 createJunior(): Junior;
	 createSemisenior(): Semisenior;
	 createSenior(): Senior;
 }