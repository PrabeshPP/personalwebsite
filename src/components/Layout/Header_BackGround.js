import React from "react";
import Header from "./Header";
import classes from "./Header_BackGround.module.css";

const HeaderBackGround=()=>{
    return <React.Fragment>
        <div className={classes.container}>
        </div>
        <Header/>
    </React.Fragment>

}

export default HeaderBackGround;