import Part1 from './components/Layout/Part1/Part1_layout';
import {Routes,Route,Navigate} from "react-router-dom";
import Part2 from "./components/Layout/Part2/Part2_layout"
import Layout from './components/Layout/Layout';



function App() {
  return (
    <Layout>
       <Routes>
       <Route path="/" element={<Navigate to={"/home"}/>}/>
        <Route path='/home' element={<Part1/>}/>
        <Route path='/skills' element={<Part2/>}/>
        <Route path='/about' element={<Part2/>}/>
        </Routes>
    </Layout>
  );
}

export default App;
