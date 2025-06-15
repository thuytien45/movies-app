import { NavLink } from 'react-router-dom';
import '../styles/TabBar.scss'; // Assuming you have styles for the tab bar

function TabBar() {
  return (
    <nav className="tab-bar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
      >
        Now Playing
      </NavLink>
      <NavLink
        to="/top-rated"
        className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
      >
        Top Rated
      </NavLink>
    </nav>
  );
}

export default TabBar;
