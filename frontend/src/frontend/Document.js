import React from 'react';
import './styles/Document.css';
import TextEditor from './TextEditor.js';
import getContent from './TextEditor.js';

import backIcon from '../res/images/backArrow.png';
import logo from '../res/images/Icon_Logo.png';

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';

import HearingOutlinedIcon from '@material-ui/icons/HearingOutlined';

const outputFile = './';

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
        <div>
            <div class="d-docContainer">
                <div class='d-topbar d-flex'>
                    <img src={backIcon} class="d-back"></img>
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
