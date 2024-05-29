import "./App.css";
import Footer from "./Components/common/Footer";
import Navbar from "./Components/common/Navbar";
import Sidebar from "./Components/common/Sidebar";
import Homepage from "./Page/Homepage";

function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <Homepage />
        <Footer />
      </div>
    </>
  );
}

export default App;
