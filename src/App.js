import "./App.css";
import { Articles, Footer, Header, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;
