import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
