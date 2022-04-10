import classes from "./OverView.module.css";
import { HiDesktopComputer,HiDeviceMobile } from "react-icons/hi";
import {RiReactjsFill} from "react-icons/ri";
import {FaEthereum,FaGithubAlt} from "react-icons/fa";

const OverView = () => {
  return (
    <div className={classes.container}>
        
        <div className={classes.githubBox}>
        <FaGithubAlt className={classes.github} />
        </div>
        

      <div className={classes.box}>
        <div className={classes.box1}>
          <span>
            Developer and Trader,specialized in Mobile App,Web App ,DSA and
            BlockChain .
          </span>
        </div>
        <div className={classes.box2}>
          <div className={classes.frontEnd}>
            <HiDesktopComputer className={classes.desktop} />
            <div className={classes.text}>
            <span>Front-End Developer</span>
            </div>
          </div>
          <div className={classes.mobileApp}>
            <HiDeviceMobile className={classes.mobile}/>
            <div className={classes.text}>
            <span>Mobile App Developer</span>
            </div>

          </div>
          <div className={classes.Algo}>
            <RiReactjsFill className={classes.algo}/>
            <div className={classes.text}>
            <span>Data Structures and Algorithms</span>
            </div>

          </div>
          <div className={classes.blockChain}>
            <FaEthereum className={classes.eth}/>
            <div className={classes.text}>
            <span>BlockChain App Developer</span>
            </div>

          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default OverView;
