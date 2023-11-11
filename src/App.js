import "./App.css";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Homepage from "./pages/Homepage";
import MoviePage from "./pages/MoviePage";
function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/movies" component={MoviePage} />
    </div>
  );
}

export default App;
