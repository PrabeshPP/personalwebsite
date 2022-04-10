import classes from "./TechStack.module.css";
const TechStack = () => {
  return (
    
     
      <div className={classes.box1}>
        <div className={classes.img}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
            alt="java"
          />
          <span class={classes.tooltiptext}>Java</span>
        </div>
        <div className={classes.img}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg"
            alt="dart"
          />
          <span class={classes.tooltiptext}>Dart</span>
        </div>

        <div className={classes.img}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg"
            alt="flutter"
          />
          <span class={classes.tooltiptext}>Flutter</span>
        </div>
        <div className={classes.imgJS}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
          />
          <span class={classes.tooltiptext}>Javascript</span>
        </div>

        <div className={classes.img}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
            alt="html5"
          />
          <span class={classes.tooltiptext}>HTML 5</span>
        </div>

        <div className={classes.img}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="css3"
          />
          <span class={classes.tooltiptext}>CSS 3</span>
        </div>

        <div className={classes.img}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
          <span class={classes.tooltiptext}>React</span>
        </div>
      </div>
   
  );
};

export default TechStack;
