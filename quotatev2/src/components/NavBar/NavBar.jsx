import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <header className='App-header'>
      Quotate
      <nav>
        <Link to="/quotes">Quotes</Link>
        &nbsp; | &nbsp;
        <Link to="/quotes/new">New Quote</Link>
        &nbsp; | &nbsp;
        <span>
          <b>Welcome, {user.name}</b>
        </span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </nav>
    </header>
  );
}
