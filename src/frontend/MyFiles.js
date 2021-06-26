import React from 'react'
import './styles/styles.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
        <div class="container">
            <div class="topbar">
                <h1 class="growTwo">My Files</h1>
                <div class="growTwo"><SearchBar/></div>
                
                <div>
                    <Button variant="contained"
                    color="primary"
                    startIcon={addIcon}
                    className={classes.button}
                    size="large">
                        CREATE</Button>
                </div>
                
            </div>
            <div class="cards">
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
            <p class="bottomLine">No more files! 🤓</p>
        </div>

    );
}

const DocCards = () => {
    return(
        <div class="card">
            <div class="summaries"><p>Summaries</p></div>
            <hr></hr>
            <div class="smallCard">
                <p>Assignment #</p>
                <p>Date</p>
            </div>
            
        </div>
    )
}

const AddCard = () => {
    return(
        <div class="card bottomLine">
            <img src="./res/images/Toolbar/akar-icons_file.png"></img>
            <p>Create file</p>
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