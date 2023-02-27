const express = require('express');
const _ = express.Router();
const apiRoutes = require('./api')


const api = process.env.BASE_URL;

_.use(api, apiRoutes);

_.use(api, (req, res) => res.json('no api found on this link'));

module.exports = _;