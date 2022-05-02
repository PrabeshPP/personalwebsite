
import {Routes,Route,Navigate} from "react-router-dom";
import Layout from './components/Layout/Layout';
import React,{Suspense} from "react";
import LoadingScreen from "./LoadingScreen";


const Part1=React.lazy(()=>import("./components/Layout/Part1/Part1_layout"));
const Part2=React.lazy(()=>import("./components/Layout/Part2/Part2_layout"));
const Part3=React.lazy(()=>import("./components/Layout/Part3/Part3"));


function App() {
  return (
    
     <Layout>
     <Suspense fallback={<LoadingScreen/>}>
       <Routes>
       <Route path="/" element={<Navigate to={"/home"}/>}/>
        <Route path='/home' element={<Part1/>}/>
        <Route path='/skills' element={<Part2/>}/>
        <Route path='/about' element={<Part3/>}/>
        </Routes>
    </Suspense>
    </Layout> 
   
  );
}

export default App;
