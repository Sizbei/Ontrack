import logo from './res/images/Full_Logo.png';
import './App.css';
import { Redirect, BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomePage from "./frontend/MyFiles.js";
import PageNotFoundPage from "./frontend/PageNotFound.js";

import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { PlayCircleFilledWhite } from '@material-ui/icons';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const drawerWidth = 240

const useStyles = makeStyles({
  drawer:{
    width: drawerWidth
  },
  sideButton:{
    background: 'white',
    textAlign: 'left',
    alignContent: 'left',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10
  }
})

const App = () => (
  <div class="homeContainer">

    <div><Main /></div>
  </div>
);

const SideBar = () => (
  <Drawer
    className={useStyles.drawer}
    variant="permanent"
    anchor="left">
    <div class="sideBar">
    <img src={logo} alt="Ontrack" class="logo"/>
      <div class="down">
        <ButtonStyled content="My files" iconSrc={<DescriptionOutlinedIcon/>}/>
        <ButtonStyled content="Account" iconSrc={<AccountCircleOutlinedIcon/>}/>
        <ButtonStyled content="Settings" iconSrc={<SettingsOutlinedIcon/>}/>
      </div>
      
    </div>
  </Drawer>
)

const ButtonStyled = (props) => {
  const classes = useStyles();
  return(
  <Button 
    startIcon={props.iconSrc}
    className={classes.sideButton}
>
    {props.content}
  </Button>);
}

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
  <div class="homeContainer">
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
    <div><SideBar/></div>
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
