import logo from './res/images/Full_Logo.png';
import './App.css';
import { Redirect, BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomePage from "./frontend/MyFiles.js";
import PageNotFoundPage from "./frontend/PageNotFound.js";

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
      <Route exact path="/files/:fileId" component={Received}></Route>
      <Route exact path="/*" component={PageNotFound}></Route>
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
    <PageNotFoundPage></PageNotFoundPage>
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
