export const API_BASE_URL = process.env.REACT_APP_API_URL;
export const CLIENT_ID = process.env.REACT_APP_DISCORD_CLIENT_ID;
console.log(`using api base url:`, API_BASE_URL);

const discord_redirect_uri = encodeURIComponent(
  `${window.origin}/login/callback`
);

export const API_ENDPOINTS = {
  DISCORD_LOGIN_REDIRECT: `https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify%20email&response_type=code&redirect_uri=${discord_redirect_uri}`,
  LOGOUT: `api/v1/users/logout`,
  LOGIN: `api/v1/users/login`,
  CURRENT_USER: 'api/v1/users/me',
  CONTENTS: `api/v1/contents`,
};
