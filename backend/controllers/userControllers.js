import mongoose from 'mongoose';
import {UserSchema} from '../models/userModel';

const User = new mongoose.model('User', UserSchema);

export const addNewUser = (req,res) => {
  let newUser = new User(req.body);
  newUser.save( (err, User) => {
    if(err) {
      res.send(err);
    }
    res.json(User);
  });
}

export const getUsers = (req,res) => {
  User.find({}, (err, User) => {
    if(err) {
      res.send(err);
    }
    res.json(User);
  });
}


export const getUserById = (req,res) => {
  User.findById(req.params.userID, (err, User) => {
    if(err) {
      res.send(err);
    }
    res.json(User);
  });
}

export const updateUser = (req,res) => {
  User.findOneAndUpdate({ _id: req.params.userID}, req.body, {new: true}, (err, User) => {
    if(err) {
      res.send(err);
    }
    res.send(User);
  });
}

export const deleteUser = (req,res) => {
  User.remove({ _id: req.params.userID},  (err, User) => {
    if(err) {
      res.send(err);
    }
    res.send({message: "Sucessfully deleted user!"});
  });
}
