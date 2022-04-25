import classes from './App.module.css';
import Part1 from './components/Layout/Part1/Part1_layout';
import {Routes,Route,Navigate} from "react-router-dom";
import Part2 from "./components/Layout/Part2/Part2_layout"
import Header from './components/Layout/Header/Header';



function App() {
  return (
    <div className={classes.App}>
        <Header/>
        <Routes>
        <Route path="/" element={<Navigate to={"/home"}/>}/>
          <Route path='/home' element={<Part1/>}/>
          <Route path='/services' element={<Part2/>}/>
        </Routes>
    </div>
  );
}

export default App;
