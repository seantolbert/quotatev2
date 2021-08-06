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
      <div className="block">
        <div className="container is-fluid">
          <button
            className="button is-large is-primary"
            onClick={() => setShowLogin(!showLogin)}
          >
            {showLogin ? "Sign Up" : "Log In"}
          </button>
        </div>
      </div>
      <div className="block">
        <div className="container is-fluid">
          <p className="title is-4">or</p>
        </div>
      </div>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
