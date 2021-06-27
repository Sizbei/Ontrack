import React from 'react';
import './styles/Document.css';
import TextEditor from './TextEditor.js';
import getContent from './TextEditor.js';

import backIcon from '../res/images/backArrow.png';
import logo from '../res/images/Icon_Logo.png';

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';

import HearingOutlinedIcon from '@material-ui/icons/HearingOutlined';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const outputFile = './';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4856fd',
          },
          secondary: {
            main: '#EDEEFF',
          },
          greyed: {
              main: '#707181'
          },
    },
    typography: {
        fontFamily: 'Poppins'
    }
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
                    fontFamily: 'Poppins'
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
                    <IconButton color="greyed">
                        <ArrowBackIcon/>
                    </IconButton>
                    <div class="d-center"><p class="d-para">Back to files</p></div>
                </div>
                <div class="d-title">
                    <img src={logo} class="d-back"></img>
                    <p>Untitled document</p>
                    <ButtonStyled content="Listen to text" iconSrc={hear} clicked={playAudio}>
                    </ButtonStyled>
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
    return(
        <div class='d-audio'>
            <div><p>Listening now</p></div>
            <Slider
                defaultValue={20}
                aria-labelledby="discrete-slider-custom"
                step={100}
            />
            <div class='d-main'>
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
