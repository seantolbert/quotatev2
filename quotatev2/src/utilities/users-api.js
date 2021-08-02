// declare the base path of the express route  we will define
import {getToken} from './users-service'
const BASE_URL = "/api/users";

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

// the route for our checkToken function should be /api/users/check-token
export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}

// helper functions
async function sendRequest(url, method = "GET", payload = null) {
  // Fetch takes an optional options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    //   ensurethe headers object exists
    options.headers = options.headers || {};
    // add token to an authorization header
    // prefacing with bearer is recommended in the HTTP specifications
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}
