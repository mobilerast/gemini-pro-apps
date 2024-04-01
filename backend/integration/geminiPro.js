const { GenerativeAIClient } = require('@google-cloud/generative-ai');
require('dotenv').config();

const apiKey = process.env.GEMINI_PRO_API_KEY;
const generativeAIClient = new GoogleGenerativeAI(apiKey);


exports.uploadAudio = async (req, res) => {
  try {
    const uploadedFile = await fileUpload.uploadFile(req);
    // const prompt = req.body.prompt;
    const prompt = "please explain the steps in the audio file."
 
    const [response] = await generativeAIClient.generateText({
      prompt: {
        text: prompt,
        audio: {
          content: uploadedFile.data, 
        },
      },
    });

    const elaboratedText = response.result.candidates[0].output;

    console.log(elaboratedText);

    res.json({ elaboratedText });
  } catch (err) {
   console.log(err);
    throw err;
  }
};