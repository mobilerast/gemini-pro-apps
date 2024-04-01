const express = require('express');
const config = require('./config/config');
const audioElaborationRoutes = require('./api/routes/audioElaborationRoutes');

const app = express();


app.use('/api/audio-elaboration', audioElaborationRoutes);

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});