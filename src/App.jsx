import "./App.css";

import Projects from "./routes/projects/projects.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import About from "./routes/about/about.component";
import Contact from "./routes/contact/contact.component";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
     <Route path='projects' element={<Projects />} />
     <Route path='about' element={<About />} />
     <Route path='contact' element={<Contact />} />
    </Route>
  )

)

function App() {
  return (
    <div className="flex">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
