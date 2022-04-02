import classes from "./Header.module.css";

const Header=()=>{
    return(
        <div className={classes.header}>
            <h1 className={classes.h1}>Prabesh</h1>
            <div className={classes.box2}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                </ul>
                <button className={classes.button}>Contact</button>
            </div>
            
        </div>
    )

}

export default Header;