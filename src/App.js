import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        {/* <MainPage /> */}
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
