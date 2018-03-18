const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('./../models/user');

exports.user_login = (req, res) => {
  User.find({ name: req.body.name })
    .then(doc => {
      console.log(doc)
      if (doc.length < 1) {
        return res.status(401).json({
          message: 'Username or password is wrong'
        });
      }
      bcrypt.compare(req.body.password, doc[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Username or password is wrong'
          });
        }
        if (result) {
          const token = jwt.sign({
            name: doc[0].name,
            id: doc[0].id,
            access: 'user'
          }, process.env.JWT_SECRET)
          return res.status(200).json({
            message: 'Auth Successful',
            token: token,
            uid: doc[0].id,
            name: doc[0].name
          })
        }
        res.status(401).json({
          message: 'Username or password is wrong'
        });
      })
    })
    .catch(err => {
      res.status(500).json({
        error: "Try again later"
      })
    })
}

exports.user_signup = (req, res) => {
  console.log('[SignUp] Here');
  User.find({ name: req.body.name })
    .then(doc => {
      if (doc.length > 0) {
        return res.status(422).json({
          message: 'Name already exists'
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              name: req.body.name,
              password: hash,
            });
            user.save()
              .then(result => {
                res.status(201).json({
                  message: 'User created'
                });
              })
              .catch(err => {
                res.status(500).json({
                  error: err
                })
              });
          }
        })
      }
    })
};