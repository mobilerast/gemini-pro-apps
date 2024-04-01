const audioFileModel = require('../../models/audioFile');
const geminiPro = require('../../integration/geminiPro');

exports.uploadAudio = async (req, res) => {
  try {

    const elaboratedAudio = await geminiPro.elaborateAudio(audioFile);

  } catch (err) {
    console.log(err);
  }
};