// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from
import * as usersAPI from "./users-api";

export async function signUp(userData) {
  try {
    // delegate the network request code to the users-api.js API module
    // this will ultimately return a json web token (JTW)
    const token = await usersAPI.signUp(userData);
    // Persist the token
    localStorage.setItem("token", token);
    //console by returning whatever is sent back to the server
    return getUser();
  } catch {
    throw new Error("Invalid Sign Up");
  }
}

export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem("token");
  if (!token) return null;
  // Check if expired, remove if it is
  const payload = JSON.parse(atob(token.split(".")[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function logOut() {
  localStorage.removeItem("token");
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

export function checkToken() {
  return (
    usersAPI
      .checkToken()
      // return a date object for more flexibility
      .then((dateStr) => new Date(dateStr))
  );
}