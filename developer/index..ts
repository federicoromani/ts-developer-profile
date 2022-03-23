/**
 * @module
 */

import { Backend } from "./layers/Backend";
import { Frontend } from "./layers/Frontend";

/**
 * @interface
 */
export interface Developer {
	createBackend(techstack: string[]): Backend;
	createFrontend(techstack: string[]): Frontend;
}
