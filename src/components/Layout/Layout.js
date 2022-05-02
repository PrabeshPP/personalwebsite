import React, { useState } from "react";
import Header from "./Header/Header";
import NavList from "./Header/NavList";

const Layout=(props)=>{
    const [show,setShow]=useState(false);
    const onShow=(isOpen)=>{
        setShow(isOpen);

    }
    return(
        <React.Fragment>
            <Header checkShow={onShow} />
            {show && <NavList show={show}/>}
            {props.children}
        </React.Fragment>
    )

}

export default Layout;