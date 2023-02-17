var express = require('express');
var router = express.Router();

var usersModel = require('../models/users.model');

/* GET ALL users */
router.get('/list', function(req, res, next) {
  usersModel.find(function(err,responseObj){
    if(err){
      res.send({status: 400, message: "Unable to list down the collection"});
    }
    else{
      res.send({status: 200, users: responseObj});
    }
  })
});

/* GET details of a particular user */
router.get('/view/:id', function(req, res, next) {
  const userID = req.params.id;
 
  usersModel.findById(userID, (err, userResponse) => {
    if(err){
      res.send({status: 400, message: "Unable to find the user with _id :"+userID});
    }
    else{
      console.log("Result: "+ userResponse);

      res.send({status: 200, message: " Requested User Detail Received: ", result: userResponse});
    }
  })
});

/* CREATE NEW USER */
router.post('/add', function(req, res, next) {

  var userName = req.body.userName;
  var emailID = req.body.emailID;
  var password = req.body.password;

  const newUser = new usersModel({
    userName : userName,
    emailID : emailID,
    password : password
  });

  newUser.save( (err, newUser) => {
    if(err){
      res.send({status: 500, message: "Unable to add new User!"});
    }
    else{
      res.send({status: 200, message: "New User added successfully!", result: newUser});
    }
  });

});

/* UPDATE A USER */
router.put('/update', function(req, res, next) {
  var userName = req.body.userName;
  var emailID = req.body.emailID;
  var password = req.body.password;

  var userID = req.body.userID;

  const updatedUserDetail = {
    userName : userName,
    emailID : emailID,
    password : password
  }
  usersModel.findByIdAndUpdate(userID, updatedUserDetail, (err, userResponse) => {
    if(err){
      res.send({status : 404, message: "Unable to update the User"});
    }
    else{
      res.send({status: 200, message: "User updated successfully", updatedDetail: userResponse});
    }
  })
});

/* DELETE A USER */
router.delete('/delete', function(req, res, next) {
  var userID = req.query.userID;

  usersModel.findByIdAndDelete(userID, (err, resObj) => {
    if(err){
      res.send({status : 404, message: "Unable to delete the User"});
    }
    else{
      res.send({status: 200, message: "User deleted successfully", deleteRes: resObj});
    }
  })
});

module.exports = router;
