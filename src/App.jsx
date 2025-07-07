import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import "./App.css";
import Image from "./components/Image";
const App = () => {
     return (
          <div>
               <h1 style={{ backgroundColor: "red", color: "white",padding:"20px" }}>
                    Welcome to React
               </h1>
               <About />
               <Contact />
               <Image/>
               <Service />
               
          </div>
     );
};

export default App;
