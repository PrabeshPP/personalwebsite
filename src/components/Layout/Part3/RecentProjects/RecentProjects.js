import classes from "./RecentProjects.module.css";
import discoverImg1 from "C:/Users/prabe/OneDrive/Desktop/personalwebsite/personalwebsite/src/assets/scc1.jpg";
import sneakersApp from "C:/Users/prabe/OneDrive/Desktop/personalwebsite/personalwebsite/src/assets/scc4.jpg";
import fuelApp from "C:/Users/prabe/OneDrive/Desktop/personalwebsite/personalwebsite/src/assets/scc5.jpg";

const RecentProjects=()=>{

    const onClickHandler=()=>{
        return window.open("https://github.com/PrabeshPP/Discover-Nepal","_blank")
    }

    const onClickHandler1=()=>{
        return window.open("https://github.com/PrabeshPP/Sneakers-Shop","_blank")

    }
    const onClickHandler2=()=>{
        return window.open("https://github.com/PrabeshPP/Fuel_APP","_blank")
    }



    return <div className={classes.box}>
    {/* Discover Nepal */}
        <div onClick={onClickHandler} className={classes.container} >
            <img src={discoverImg1} alt="Discover Nepal" />
            <h1>Discover Nepal</h1>
            


        </div>

        <div onClick={onClickHandler1} className={classes.container} >
        <img src={sneakersApp} alt="Sneakers" />
        <h1>E-Commerce App</h1>
            
            

        </div>

        <div onClick={onClickHandler2} className={classes.container} >
        <img src={fuelApp} alt="Fuel App" />
        <h1>Fuel App</h1>
            

        </div>
        
        


     </div>

}

export default RecentProjects;