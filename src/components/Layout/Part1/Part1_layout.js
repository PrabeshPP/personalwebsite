import classes from "./Part1_layout.module.css";
import DescriptionBox from "../Description";
import Cover from "../Cover";
import TechStack from "../Part2/TechStack/TechStack";

const Part1=()=>{
    return(
        <div className={classes.part1}>
           
            <div className={classes.body}>
                <DescriptionBox/>
                <Cover/>
            </div>
            <TechStack/>
        </div>
    );
}

export default Part1;