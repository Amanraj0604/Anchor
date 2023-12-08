import Home from "./component/Home/Home";
import Earning from "./component/Earning/Earning";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earning" element={<Earning />} />
      </Routes>
    </Router>
    
  );
}

export default App;
