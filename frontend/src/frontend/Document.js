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

import sound from '../res/tts.mp3'
import { MusicOffOutlined } from '@material-ui/icons';

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
                onClick={props.clicked}>
                {props.content}
            </Button>
        </div>
    </ThemeProvider>
    );
}

let showAudio = 0
let showSummarize = 0

function toggleAudio () {
    console.log('toggled audio');
    showAudio = 1;
}

function toggleSum  () {
    console.log('toggled sum');
    showSummarize = 1;
}

function Document() {
    return(
        <div class="d-main">
            <div class="d-docContainer">
                <div class='d-topbar d-flex'>
                    <ThemeProvider theme={theme}>
                        <IconButton color="default"
                        href = "/"
                        onClick={() => {
                            <href>"/"</href>
                          }}>
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
                        <ButtonStyled content="Listen to text" iconSrc={hear} clicked={toggleAudio}>
                    </ButtonStyled>
                    <ButtonStyled content="Summarize" iconSrc={<NotesOutlinedIcon/>} clicked={toggleSum}></ButtonStyled>
                    <ButtonStyled content="Set a goal" iconSrc={<DateRangeOutlinedIcon/>}></ButtonStyled>
                    </div>

                </div>
                <TextEditor/>
            </div>
            <div class='d-sidebar'>
                <AudioPlayer/>
                <Summary/>
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
    if(showAudio === 1) {
        return(
            <div class='d-audio' id="audiobox">
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
                        <IconButton color="primary"
                            onClick={playAudio}>
                            <PlayCircleFilledIcon/>
                        </IconButton>
                        <IconButton color="primary">
                            <FastForwardIcon/>
                        </IconButton>
                    </div>
                </ThemeProvider>
                

            </div>
        );
    } else {
        return(
            <div></div>
        );
    }

}

const Summary = () => {
    if(showSummarize === 1) {
        return (
            <div class="d-audio" id="summarybox">
                <p>
                    Hackthons changing world by bringing people together. Recent Hackathons have shown great successes. 9 tips
                    for hosting sucessful hackathons. Announce at least advance, hackathon specific tools..
                </p>
            </div>
        );
    } else {
        return(
            <div></div>
        );
    }
}

let playing = 0;
var music = new Audio(sound);

const playAudio = () => {
    /*
    const text = getContent();
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(text.value);
    utterThis.voice = synth.getVoices()[0];
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
    */
   
   if(playing === 0) {
        music.play();
        playing = 1;
   } else {
        music.pause();
        playing = 0;
   }
    
};

export default Document
