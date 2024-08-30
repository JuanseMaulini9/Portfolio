import Home from "./View/Home";
import Projects from "./View/Projects";
import About from "./View/About";
import Footer from "./components/Footer";

function App() {
  return (
    <main
      className="bg-gradient-to-t from-zinc-900 to-zinc-800 min-h-screen text-white
      flex flex-col items-center p-4 
    "
    >
      <div className="w-full sm:w-1/2 pt-20">
        <Home></Home>
        <Projects></Projects>
        <About></About>
      <Footer></Footer>
      </div>
    </main>
  );
}

export default App;
