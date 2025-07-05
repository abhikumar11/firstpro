import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";

const App = () => {
  let name="Akshay"
     return (
      <div>
     <h1>Welcome {name}</h1>
     <About/>
     <Service/>
     <Contact/>
     </div>
    );
};

export default App;
