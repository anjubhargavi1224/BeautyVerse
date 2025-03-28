import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Homes";
import Makeupblog from "./pages/Blog/Makeupblog";
import Dermatologyblog from "./pages/Blog/Dermatologyblog";
import Skincareblog from "./pages/Blog/Skincareblog";
import Questionnaire from "./pages/Questionnaire/Questionnaire"; // Import the Questionnaire component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skincare" element={<Skincareblog />} />
        <Route path="/makeup" element={<Makeupblog />} />
        <Route path="/dermatologist" element={<Dermatologyblog />} />
        <Route path="/questionnaire" element={<Questionnaire />} /> {/* Add route */}
      </Routes>
    </Router>
  );
}

export default App;
