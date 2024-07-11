const express = require('express');
const bodyParser = require('body-parser');
const instanceRoutes = require('./routes/instanceRoutes');
const patchRoutes = require('./routes/patchRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/instance', instanceRoutes);
app.use('/api/patch', patchRoutes);
app.use('/api/reports', reportRoutes);

module.exports = app;
