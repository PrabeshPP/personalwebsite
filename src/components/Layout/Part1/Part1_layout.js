import classes from "./Part1_layout.module.css";
import Header from "../Header/Header";
import DescriptionBox from "../Description";
import Cover from "../Cover";

const Part1=()=>{
    return(
        <div className={classes.part1}>
            <Header/>
            <div className={classes.body}>
                <DescriptionBox/>
                <Cover/>

            </div>

            {/* 
             */}
        </div>
    );
}

export default Part1;