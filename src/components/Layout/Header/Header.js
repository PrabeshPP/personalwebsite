import classes from "./Header.module.css";
import ProgrammerIcon from "../../Icon_Layout/Programmer_Icon";
import { NavLink } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import { useState } from "react";
import NavList from "./NavList";

const Header = (props) => {
  const [isOpen,setIsOpen]=useState(false);

  const onOpenEmail=()=>{
    return window.open('mailto:prabesh.bista1000@gmail.com');
  }

  const onClickChangeHandler=()=>{
    setIsOpen(!isOpen);
   
    
  }

  props.checkShow(isOpen);
  

 

  return (
    <div className={classes.header}>
        <ProgrammerIcon />
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
      <div className={classes.icon}><a onClick={onClickChangeHandler} ><AiOutlineMenu className={classes.iconIco}/></a></div>
      
    </div>
  );
};

export default Header;
