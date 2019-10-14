import bugsnagClient from '../utils/bugsnag';
import { setOnStorage, getFromStorage, removeFromStorage } from '../utils/localStorage';

export function login(setLogin, clientId, uiConfiguration) {
  import('auth0-lock').then(auth0 => {
    const lock = new auth0.Auth0Lock(clientId, process.env.REACT_APP_AUTH0_URL, uiConfiguration);

    lock.on('authenticated', (authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        setOnStorage('access_token', authResult.accessToken);
        setOnStorage('id_token', authResult.idToken);
        setOnStorage('expires_at', expiresAt);
      }
      lock.getUserInfo(authResult.accessToken, (error, profile) => {
        setOnStorage('email', profile.email);
        setLogin();
        if (error) {
          bugsnagClient.notify(error);
        }
      });
    });
    lock.show();
  });
}
export function logout() {
  removeFromStorage('access_token');
  removeFromStorage('id_token');
  removeFromStorage('expires_at');
  removeFromStorage('email');
}

export function isLogged() {
  if (getFromStorage('access_token') && getFromStorage('id_token') && isAuthenticated()) {
    return true;
  }
  return false;
}
export function isAuthenticated() {
  const expiresAt = JSON.parse(getFromStorage('expires_at'));
  return new Date().getTime() < expiresAt;
}
