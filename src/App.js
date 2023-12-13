import './App.css';
import {Route,Routes} from "react-router-dom";
import HomePage from "./component/HomePage";
import Room from './component/Room';


function App() {
  return (
    <div className="App">
   
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/room/:roomId" element={<Room/>} />
      
     </Routes>

    </div>
  );
}

export default App;
