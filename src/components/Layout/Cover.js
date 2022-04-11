import coverImg from "C:/Users/prabe/OneDrive/Desktop/personalwebsite/personalwebsite/src/assets/cover.png"
import classes from "./Cover.module.css";
const Cover=()=>{
    return(
        <img src={coverImg} alt="cover" className={classes.coverImg}/>
    )

}

export default Cover;