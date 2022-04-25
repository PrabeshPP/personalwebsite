import classes from "./Header.module.css";
import ProgrammerIcon from "../../Icon_Layout/Programmer_Icon";

const Header = () => {

  

  return (
    <div className={classes.header}>
      <span className={classes.progIcon}>
        <ProgrammerIcon />
      </span>
      <div className={classes.box2}>
        <ul>
          <li onClick={scrollToSection}>Home</li>
          <li>Services</li>
          <li>About</li>
          
        </ul>
        <button className={classes.button}>Contact</button>
      </div>
    </div>
  );
};

export default Header;
