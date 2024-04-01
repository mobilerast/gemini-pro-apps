const audioFileModel = require('../../models/audioFile');
const geminiPro = require('../../integration/geminiPro');
const fileUpload = require('../../utils/fileUpload');

exports.uploadAudio = async (req, res) => {
  try {
    const uploadedFile = await fileUpload.uploadFile(req);

    const elaboratedAudio = await geminiPro.elaborateAudio(uploadedFile);

    console.log(elaboratedAudio);

    res.json({ elaboratedAudioUrl: elaboratedAudioUrl });
  } catch (err) {
    console.log(err);
  }
};