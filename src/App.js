import Header from "./components/Header";
import Home from "./components/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homescreen from "./components/Homescreen";
import Details from "./components/Details";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Homescreen/>}/>
          <Route path="/details/:id" element={<Details/>}/>
       </Routes> 
    </div>
  );
}

export default App;
