const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient();


/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const text = 'Text to synthesize, eg. hello';
// const outputFile = 'Local path to save audio file to, e.g. output.mp3';

let text = ''

function getText(t) {
    text = t;
}

const request = {
  input: {text: text},
  voice: {languageCode: 'en-US', ssmlGender: 'FEMALE'},
  audioConfig: {audioEncoding: 'MP3'},
};
const [response] = await client.synthesizeSpeech(request);
const writeFile = util.promisify(fs.writeFile);
await writeFile(outputFile, response.audioContent, 'binary');
console.log(`Audio content written to file: ${outputFile}`);