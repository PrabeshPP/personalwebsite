import classes from "./Header.module.css";
import ProgrammerIcon from "../../Icon_Layout/Programmer_Icon";
import { NavLink } from "react-router-dom";
const Header = () => {
  const onOpenEmail=()=>{
    return window.open('mailto:prabesh.bista1000@gmail.com');
  }
  return (
    <div className={classes.header}>
      <span className={classes.progIcon}>
        <ProgrammerIcon />
      </span>
      <div className={classes.box2}>
        <ul>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : null)}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : null)}
            to="/skills"
          >
            Skills
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : null)}
            to="/about"
          >
            Projects
          </NavLink>
        </ul>
        <button onClick={onOpenEmail} className={classes.button}>Contact</button>
      </div>
    </div>
  );
};

export default Header;
