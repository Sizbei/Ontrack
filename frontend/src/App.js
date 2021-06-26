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
import { makeStyles, ThemeProvider, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { PlayCircleFilledWhite } from '@material-ui/icons';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import './frontend/styles/MyFiles.css'

const drawerWidth = 240

const selectedTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#EDEEFF',
    }
  }
});

const useStyles = makeStyles({
  drawer:{
    width: drawerWidth
  },
  sideButton:{
    color: 'primary',
    textAlign: 'left',
    alignContent: 'left',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 30,
    height: 50
  }
})

const App = () => (
  <div class="mf-homeContainer">

    <div><Main /></div>
  </div>
);

const SideBar = () => (
  <Drawer
    className={useStyles.drawer}
    variant="permanent"
    anchor="left">
    <div class="mf-sideBar">
    <img src={logo} alt="Ontrack" class="mf-logo"/>
      <div class="mf-down">
        <ButtonStyled content="My files" iconSrc={<DescriptionOutlinedIcon/>} selected='1' />
        <ButtonStyled content="Account" iconSrc={<AccountCircleOutlinedIcon/>}/>
        <ButtonStyled content="Settings" iconSrc={<SettingsOutlinedIcon/>}/>
      </div>
      
    </div>
  </Drawer>
)

const ButtonStyled = (props) => {
  const classes = useStyles();
  if(props.selected === 1) {
    return(
      <MuiThemeProvider theme={selectedTheme}>
            <Button 
              color='primary'
              startIcon={props.iconSrc}
              className={classes.selectedButton}>
              {props.content}
            </Button>);
      </MuiThemeProvider>)
  } else {
      return(
      <Button 
      color='primary'
      variant='raised'
        startIcon={props.iconSrc}
        className={classes.sideButton}>
        {props.content}
      </Button>);
  }

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
  <div class="mf-homeContainer">
    <div><SideBar/></div>
    <div>
        <Container className="mf-container">
        <Row>
          <Col>
            <HomePage></HomePage>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
    
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
