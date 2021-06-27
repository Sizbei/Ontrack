import React from 'react';
import './styles/Document.css';
import TextEditor from './TextEditor.js';
import getContent from './TextEditor.js';

import backIcon from '../res/images/backArrow.png';
import logo from '../res/images/Icon_Logo.png';

import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';

import HearingOutlinedIcon from '@material-ui/icons/HearingOutlined';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NotesOutlinedIcon from '@material-ui/icons/NotesOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';

const outputFile = './';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4856fd',
          },
          secondary: {
            main: '#EDEEFF',
          },
          default: {
              main: '#707181'
          },
    },
    typography: {
        fontFamily: 'Poppins'
    }
  });

  const useStyles = makeStyles({
    root: {
      width: 200,
    },
  });
  

const hear =(
    <HearingOutlinedIcon/>
);

const ButtonStyled = (props) => {
    return(
        <ThemeProvider theme={theme}>
        <div>
            <Button
                variant="outlined"
                color="primary"
                endIcon={props.iconSrc}
                style={{
                    backgroundColor: 'white',
                    fontFamily: 'Poppins',
                    marginLeft: 10
                }}
                onClicked={props.clicked}>
                {props.content}
            </Button>
        </div>
    </ThemeProvider>
    );
}

function Document() {
    return(
        <div class="d-main">
            <div class="d-docContainer">
                <div class='d-topbar d-flex'>
                    <ThemeProvider theme={theme}>
                        <IconButton color="default">
                            <ArrowBackIcon/>
                        </IconButton>
                    </ThemeProvider>
                    <div class="d-center"><p class="d-para">Back to files</p></div>
                </div>
                <div class="d-title">
                    <div class="d-wrap">
                        <img src={logo} class="d-back"></img>
                        <p class="d-docName">Untitled document</p> 
                    </div>
                    <div class="d-wrap">
                        <ButtonStyled content="Listen to text" iconSrc={hear} clicked={playAudio}>
                    </ButtonStyled>
                    <ButtonStyled content="Summarize" iconSrc={<NotesOutlinedIcon/>}></ButtonStyled>
                    <ButtonStyled content="Set a goal" iconSrc={<DateRangeOutlinedIcon/>}></ButtonStyled>
                    </div>

                </div>
                <TextEditor/>
            </div>
            <div class='d-sidebar'>
                <AudioPlayer/>
            </div>
        </div>
    );
}

const AudioPlayer = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <div class='d-audio'>
            <ThemeProvider theme={theme}>
                <div><p>Listening now</p></div>
                <div>

                </div>
                <Slider value={value} onChange={handleChange}
                    aria-labelledby="continuous-slider" />
                <div class='d-main d-space'>
                    <IconButton color="primary">
                        <FastRewindIcon/>
                    </IconButton>
                    <IconButton color="primary">
                        <PlayCircleFilledIcon/>
                    </IconButton>
                    <IconButton color="primary">
                        <FastForwardIcon/>
                    </IconButton>
                </div>
            </ThemeProvider>
            

        </div>
    );
}

const playAudio = () => {
    const text = getContent();
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(text.value);
    utterThis.voice = synth.getVoices()[0];
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
};

export default Document
