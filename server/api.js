const ModelLab = require('./models/lab');
const ModelWork = require('./models/work');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = express.Router();


mongoose.promise = global.Promise;

mongoose.connect('mongodb://nitramnoe:vishnou5@ds149132.mlab.com:49132/portfolio', {
  useMongoClient: true,
  /* other options */
})
.then(()=>{
  console.log('hello');
});

router.get('/lab', (req, res) => {
  ModelLab.find().exec((err, results)=>{
    res.json(results)
  })
});

router.get('/work', (req, res) => {
  ModelWork.find().exec((err, results)=>{
    res.json(results)
  })
});

module.exports = router;
