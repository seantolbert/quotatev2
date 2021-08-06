import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  const [isActive, setisActive] = useState(false);
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
                  {showLogin ? "Sign Up" : "Log In"}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="block">
        <section className="hero is-success">
          <div className="hero-body">
            <p className="title">Welcome to Quotate</p>
            <p className="subtitle">
              your personal diary for what you find profound
            </p>
          </div>
        </section>
      </div>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
