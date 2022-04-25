import React from "react";
import TechStack from "./TechStack/TechStack";
import OverView from "./TechStack/OverView";
import classes from "./Part2_layout.module.css";

const Part2=()=>{
    return (
        <div className={classes.part2}>
        <div className={classes.body}>
         <OverView/>
        </div>
            
        </div>
        
    
    )

}

export default Part2;