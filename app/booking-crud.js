var express = require('express');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


var mongoose = require('mongoose');

var bookingSchema = mongoose.Schema({
  moviName: String,
  cityName: String,
  theatreName: String,

});

var Booking = mongoose.model('Booking', bookingSchema, 'booking');

router.get('/getBooking', function(req, res){
  console.log("INSIDE GET TIMINGS FUNCTION IN SERVER");
  Booking.find({}, function(err,docs){
    res.json(docs);
  });
});

router.get('/getBooking/:id', function(req,res){
  console.log("REACHED GET ID FUNCTION ON SERVER");
  Booking.find({_id: req.params.id}, function(err,docs){
    res.json(docs);
  });
});

router.post('/addBooking', function(req, res){
  console.log('Inside CRUD POST showtime');

  var booking = new Booking({
    moviName:name,
    cityName:name,
    theatreName:name
  
    
  });
 
 

  booking.save(function(err,docs){
    if(err) throw err;
    console.log("TIMINGS SAVED SUCCESSFULLY");
    res.json(docs);
  });
});

router.delete('/deleteBooking/:id', function(req,res){
  console.log("REACHED DELETE TIMINGS FUNCTION ON SERVER");
  Booking.remove({_id:req.params.id}, function(err,docs){
    res.json(docs);
  });
});

router.put('/updateBooking/:id', function(req,res){
  console.log("REACHED PUT ON Update Booking");
  console.log(req.body);
  Booking.findOneAndUpdate({_id:req.params.id}, req.body, function(err,data){
    res.json(data);
  });
});

router.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;