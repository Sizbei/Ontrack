import logo from './logo.svg';
import './App.css';
import { NavLink, Switch, Route, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => (
  <div className="app">
    <img src={logo} alt="Ontrack" class="logo" />
    <Main />
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/404" component={PageNotFound}></Route>
    <Route exact path="/receivedlink/:fileId" component={Received}></Route>
  </Switch>
);

const Home = () => (
  <div className="home center">
 
  </div>
);

export default App;
