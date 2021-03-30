//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./home"
import Javaquiz from './javaquiz';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TakeQuiz from "./takequiz"

function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route path ="/" exact="true">
      <Home></Home>
      </Route>
      <Route path ="/javaquiz" exact="true">
      <Javaquiz></Javaquiz>
      </Route>
      <Route path ="/takequiz" exact="true">
      <TakeQuiz></TakeQuiz>
      </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
