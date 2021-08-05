import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main>
      <div className="block">
        <nav className="navbar is-black">
          <div className="navbar-item">
            <div className="title">
              <b className="quotate">Quotate</b>
            </div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <button
                  className="button is-primary"
                  onClick={() => setShowLogin(!showLogin)}
                >
                  {showLogin ? "SignUp" : "LOG IN"}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
