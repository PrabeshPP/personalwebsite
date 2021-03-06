import classes from "./Description.module.css";

const DescriptionBox = () => {

  const decscription=" I am a mobile app developer,block-chain enthusiast,open-source contributor with root knwoledge in Java,Dart, and JavaScript.I am a Full-time stock trader. I am a keen learner who is hooked with computer,history and economics.Checkout my personal projects and open-source work,fleel free to get in touch if you want to work with me.";
  
const  onClickButton=()=>{
    window.open("https://github.com/PrabeshPP?tab=overview","_blank");
  }
  return (
   
      <div className={classes.box}>
      <h1 className={classes.header}>Hi ! I'm <span>Prabesh.</span></h1>
      <p className={classes.body}>
       {decscription}
      </p>
      <button onClick={onClickButton} className={classes.button}>Github</button>
    </div>
    
  );
};

export default DescriptionBox;
