import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Admin />
       
      </div>
    </BrowserRouter>
  );
}

export default App;
