import classes from "./OverView.module.css";
import { HiDesktopComputer, HiDeviceMobile } from "react-icons/hi";
import { RiReactjsFill } from "react-icons/ri";
import coverImg from "C:/Users/prabe/OneDrive/Desktop/personalwebsite/personalwebsite/src/assets/pic2.jpg"
import coverImg1 from "C:/Users/prabe/OneDrive/Desktop/personalwebsite/personalwebsite/src/assets/pic1.jpg"
const OverView = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
       <img  className={classes.pic1} src={coverImg} />
        <div className={classes.backImg}>
        </div>
        {/* <img  className={classes.pic2} src={coverImg1} /> */}
     
       
        
      </div>

      <div className={classes.box}>
        <div className={classes.box1}>
          <span>
            Developer and Trader,specialized in Mobile App,Web App ,DSA and
            BlockChain .
          </span>
        </div>
        <div className={classes.box2}>
          <div className={classes.flipCard}>
            <div className={classes.flipCardInner}>
              <div className={classes.frontEnd}>
                <HiDesktopComputer className={classes.desktop} />
                <div className={classes.text}>
                  <span>Front-End Developer</span>
                </div>
              </div>
              <div className={classes.flipCardback}>
                <h3>Skills</h3>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>React JS</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={classes.flipCard}>
            <div className={classes.flipCardInner}>
              <div className={classes.mobileApp}>
                <HiDeviceMobile className={classes.mobile} />
                <div className={classes.text}>
                  <span>Mobile App Developer</span>
                </div>
              </div>

              <div className={classes.flipCardback}>
                <h3>Skills</h3>
                <ul>
                  <li>Java</li>
                  <li>Flutter</li>
                  <li>Dart</li>
                  <li>Firebase</li>
                  <li>Flutter Bloc</li>
                  <li>SQFLite</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={classes.flipCard}>
            <div className={classes.flipCardInner}>
              <div className={classes.Algo}>
                <RiReactjsFill className={classes.algo} />
                <div className={classes.text}>
                  <span>Data Structures and Algorithms</span>
                </div>
              </div>

              <div className={classes.flipCardback}>
                <h3>Skills</h3>
                <h4>
                  <span>Language</span> : Java
                </h4>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default OverView;
