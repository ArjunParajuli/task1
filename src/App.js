import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    
      <Navigation />

      <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>

    </BrowserRouter>
  );
}

export default App;
