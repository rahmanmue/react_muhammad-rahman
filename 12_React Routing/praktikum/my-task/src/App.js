import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import NotFound from "./components/NotFound";
import AboutAuthor from "./components/AboutAuthor";
import AboutApp from './components/AboutApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/about/about-app" element={<AboutApp/>}/>
        <Route path="/about/about-author" element={<AboutAuthor/>}/>
        <Route path="*" element={<NotFound/>}/>
     
      </Routes>
    </BrowserRouter>
    // <Home/>
    // <AboutAuthor/>
  );
}

export default App;
