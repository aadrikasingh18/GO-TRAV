import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <div id="home">
        <Home />
      </div>
      
      <Footer />
    </>
  );
}

export default App;