/**
 * @module
 */

 import { Junior } from "./seniority/Junior";
 import { Semisenior } from "./seniority/Semisenior";
 import { Senior } from "./seniority/Senior";
 
 /**
	* Define la creación de todos los {@linkcode Profiles.Profiles}
	* @interface
	*/
 export interface DevBySeniority {
	 createJunior(): Junior;
	 createSemisenior(): Semisenior;
	 createSenior(): Senior;
 }