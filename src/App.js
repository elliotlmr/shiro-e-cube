import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import Galery from "./pages/Galery/Galery";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/galery'>
          <Galery />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
