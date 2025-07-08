import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import "./App.css";
import Image from "./components/Image";
import Hero from "./components/Hero";
const App = () => {
     return (
          <div>
               <h1 style={{ backgroundColor: "red", color: "white",padding:"20px" }}>
                    Welcome to React
               </h1>
               <About/>
               <Contact/>
               <Image/>
               <Service/>
               <Hero/>
          </div>
     );
};

export default App;
