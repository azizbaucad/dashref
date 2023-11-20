import { authentication, passwordRecovery, registration } from './src/auth';
import { highlight } from './src/highlight';
import { passwordEdit, userInfosEdit } from './src/user';

export const authenticationSchema = authentication;
export const registrationSchema = registration;
export const passwordRecoverySchema = passwordRecovery;
export const userInfosEditSchema = userInfosEdit;
export const passwordEditSchema = passwordEdit;
export const highlightSchema = highlight;
