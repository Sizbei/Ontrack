import React, { Component } from 'react'
import './styles/MyFiles.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import addFile from '../res/images/addFile.png'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { withStyles, makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import searchBar from '../res/images/searchBar.png'
import TextEditor from "./TextEditor.js";

let r = document.querySelector(':root');
let rs = getComputedStyle(r);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#4856fd',
      },
      secondary: {
        main: '#EDEEFF',
      }
    },
    typography: {
        fontFamily: 'Poppins',
        fontSize: 60
    }
  })

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      borderRadius: "10px",
    },
    input: {
      display: "none"
    },
    textfield: {
        backgroundColor: '#FFF'
    }
  }));

const addIcon = (
    <AddCircleOutlineIcon/>
)

const MyFiles = () => {
    const classes = useStyles();
    return(
        <div class="mf-container">
            <div class="mf-topbar">
                <h1 class="mf-growTwo">My files</h1>
                <div class="mf-growTwo"></div>
                <div class="mf-growOne">
                    <div class="alignright"><SearchBar/></div>
                    <Button variant="contained"
                    color="primary"
                    endIcon={addIcon}
                    className={classes.button}
                    size="large"
                    style={{
                        backgroundColor: '#4856FD',
                        color: 'white',
                        textAlign: 'left',
                        fontFamily: 'Poppins'
                      }}
                    onClick={() => {
                        <href></href>
                      }}
                    >
                        Create file</Button>
                </div>
                
            </div>
            <div class="mf-cards">
                <AddCard/>
                <DocCards/>
                <DocCards/>
                <DocCards/>
            </div>
            <p class="mf-bottomLine mf-topmarg">No more files! 🤓</p>
        </div>

    );
}

const DocCards = () => {
    return(
        <div class="mf-card">
            <div class="mf-summaries"><p>Summaries</p></div>
            <hr></hr>
            <div class="mf-smallCard">
                <h1 class="mf-h1">Assignment #</h1>
                <p>Date</p>
            </div>
            
        </div>
    )
}

const AddCard = () => {
    return(
        <div class="mf-card mf-bottomLine">
            <div class = "mf-addFile">
                <img src={addFile} alt="addFile"/>
                <p>Create file</p>
            </div>
        </div>
    )
}

const SearchBar = () => {
    return (
        <div class="alignright">
            <img src={searchBar}></img>
        </div>
        
    )
}

export default MyFiles