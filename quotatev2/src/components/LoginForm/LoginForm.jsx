import { useState } from "react";
import * as usersService from "../../utilities/users-service";

export default function LogIn({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div className="container is-fluid">
      <h2 className="title">Log In</h2>
      <div onSubmit={handleSubmit}>
        <form autoComplete="off" className="box">
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input is-primary is-rounded"
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input is-primary is-rounded"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button className="button is-primary" type="submit">LOG IN</button>
        </form>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    </div>
  );
}
