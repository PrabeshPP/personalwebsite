import React from "react";
import classes from "./header.module.css";

function Header(){
    return(
        <div className={classes.header}>
        <div>
            <h1>P.</h1>
        </div>
        <div className={classes.div2}>
            <h4>Github</h4>
            <h4>About</h4>
        </div>
        <button>Say Hello!</button>
        </div>
    );
}

export default Header;