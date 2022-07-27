import "./App.css";
import { Articles, Footer, Header, Main, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Main/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;
