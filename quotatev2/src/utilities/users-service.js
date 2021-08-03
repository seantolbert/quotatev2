import * as usersAPI from "./users-api";

export async function signUp(userData) {
  try {
    const token = await usersAPI.signUp(userData);
    localStorage.setItem("token", token);
    return getUser();
  } catch {
    throw new Error("Invalid Sign Up");
  }
}

export async function login(credentials) {
  try {
    // delegate the network request code to the users-api.js API module
    // this will ultimately return a json web token (JTW)
    const token = await usersAPI.login(credentials);
    // Persist the token
    localStorage.setItem("token", token);
    //console by returning whatever is sent back to the server
    return getUser();
  } catch {
    throw new Error("Invalid Sign Up");
  }
}

export function logOut() {
  localStorage.removeItem("token");
}

export function checkToken() {
  return (
    usersAPI
      .checkToken()
      .then((dateStr) => new Date(dateStr))
  );
}

export function getToken() {
  const token = localStorage.getItem("token");
  console.log('token ', token)
  if (!token) return null;
  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}






