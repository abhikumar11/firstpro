import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";

const App = () => {
     return (
          <div>
               <h1 style={{ backgroundColor: "red", color: "white" }}>
                    Welcome to React
               </h1>
               <About />
               <Service />
               <Contact />
          </div>
     );
};

export default App;
