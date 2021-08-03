import {useState} from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true)
  return (
    <main>
      <h1>AuthPage</h1>
      <h3 onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'SignUp' : 'LOG IN'}
      </h3>
      {showLogin ? (
				<LoginForm setUser={setUser} />
			) : (
				<SignUpForm setUser={setUser} />
			)}
    </main>
  );
}