import classes from "./NavList.module.css";
import { NavLink } from "react-router-dom";

const NavList=(props)=>{
  const onOpenEmail=()=>{
    return window.open('mailto:prabesh.bista1000@gmail.com');
  }


    return(
        <div className={classes.box2}>
        
        <div className={classes.box3}>
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
          <button onClick={onOpenEmail} className={classes.button}>Contact</button>
        </ul>
        </div>
        
      </div>

    );

}

export default NavList;