import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomePage from "./frontend/MyFiles.js";

const App = () => (
  <div className="app">
    <img src={logo} alt="Ontrack" class="logo" />
    <Main />
  </div>
);

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/404" component={PageNotFound}></Route>
      <Route exact path="/receivedlink/:fileId" component={Received}></Route>
    </Switch>
  </BrowserRouter>
);

const Home = () => (
  <div className="home center">
     <Container>
      <Row>
        <Col>
          <HomePage></HomePage>
        </Col>
        <Col>
        
        </Col>
      </Row>
    </Container>
  </div>
);

const PageNotFound = () => (
  <div className="error">
    
    <p></p>
  </div>
);

const Received = () => {
  //let { fileId } = useParams();
  //return(
  //<div>
  // <div className="link center">
  // </div>
  //</div>)
};

export default App;
