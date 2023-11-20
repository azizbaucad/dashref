import { useAutologout as autoLogout } from './src/autologout';
import { useMockedData as mock } from './src/mock';
import { usePasswordType as password } from './src/password';

export const usePasswordType = password;
export const useAutoLogout = autoLogout;
export const useMockedData = mock;
