
import { BrowserRouter} from "react-router-dom";
import Routes from "../src/routes/routes";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <div className="main">
            <Routes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
