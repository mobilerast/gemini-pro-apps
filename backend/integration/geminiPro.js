const GeminiPro = require('gemini-pro-sdk');

const geminiPro = new GeminiPro({
  apiKey: process.env.GEMINI_PRO_API_KEY
});

exports.elaborateAudio = async (audioFile) => {
  try {
    const predefinedPrompt = "Can you please check this audio's English? Also, can you please make some suggestions along with your response to help improve the user's grammar?";


    const elaboratedAudio = await geminiPro.elaborate(audioFile, predefinedPrompt);

 
    return elaboratedAudio;
  } catch (err) {
    console.log(err);
    throw err;
  }
};