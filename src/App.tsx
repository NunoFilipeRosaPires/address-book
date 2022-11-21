import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="page container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
