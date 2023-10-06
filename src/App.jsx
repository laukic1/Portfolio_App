import "./App.css";

import Projects from "./routes/projects/projects.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import About from "./routes/about/about.component";
import Contact from "./routes/contact/contact.component";

import { ScrollToTop } from "./hooks/scroll-to-top.hook";

import {
  BrowserRouter,
  Route,
  Routes,
  
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="flex">
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Navigation />}>
    
    
    <Route index element={<Home />} />
   <Route path='projects' element={<Projects />} />
   <Route path='about' element={<About />} />
   <Route path='contact' element={<Contact />} />
  </Route>
     
  </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
