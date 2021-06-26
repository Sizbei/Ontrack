import React from 'react'
import './styles/MyFiles.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import addFile from '../res/images/addFile.png'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

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
    }
  })

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      borderRadius: "10px"
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
                <h1 class="mf-growTwo">My Files</h1>
                <div class="mf-growTwo"><SearchBar/></div>
                
                <div>
                    <Button variant="contained"
                    color="primary"
                    endIcon={addIcon}
                    className={classes.button}
                    size="large">
                        CREATE</Button>
                </div>
                
            </div>
            <div class="mf-cards">
                <AddCard/>
                <DocCards/>
                <DocCards/>
                <DocCards/>
                <DocCards/>
                <DocCards/>
                <DocCards/>
                <DocCards/>
                <DocCards/>
            </div>
            <p class="mf-bottomLine">No more files! 🤓</p>
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
        <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            fullWidth
            placeholder="Search"
            variant="filled"
            className={useStyles.textfield}
            />
    )
}

export default MyFiles