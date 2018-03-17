require('./config/config');

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const port = process.env.PORT || 3001;

const { mongoose } = require('./db/mongoose.js');
const { Resident } = require('./models/resident');
const { Notice } = require('./models/notice');
const { User } = require('./models/user');
const { user_signup, user_login } = require('./controllers/users');
const authentication = require('./middleware/authenticate')

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth");
  next();
});

app.use('/api', router);

/*
*Login API
*/

router.route('/login')
  .post(user_login)

/*
*SignUp API
*/

router.route('/signup')
  .post(user_signup)


/*
*Residents API
*/

router.route('/residents')

  // Get All Residents
  .get(authentication, (req, res) => {

    Resident.find()
      .then((residents) => {
        //Finding unique wings
        let wings = residents.reduce((uniqueWings, resident) => {
          if (resident.wing && !~uniqueWings.indexOf(resident.wing)) {
            uniqueWings.push(resident.wing);
          }
          return uniqueWings;
        }, []);

        //Creating the resident obj
        let allResidents = {};
        wings.map(wing => {
          allResidents[wing] = residents.filter(resident => resident.wing === wing)
        })
        wings.map(wing => {
          allResidents[wing] = allResidents[wing].map(resident => {
            let { name, flatNo, floor } = resident
            return {
              name,
              flatNo,
              floor
            }
          })
        })
        res.send(allResidents)
      }, e => res.status(400).send(e));
  })

  //Add Residents
  .post(authentication, (req, res) => {
    let resident = new Resident({
      name: req.body.name,
      flatNo: req.body.flatNo,
      wing: req.body.wing,
      floor: req.body.floor,
    });

    resident.save()
      .then((doc) => {
        res.send(doc);
      }, e => {
        res.status(400).send(e);
      });
  });

/*
*Notices API
*/

router.route('/notices')
  .get(authentication, (req, res) => {
    Notice.find()
      .sort('-date')
      .then(notices => {
        res.status(200).send(notices);
      }, e => res.status(400).send(e))
  })
  .post(authentication, (req, res) => {
    let notice = new Notice({
      title: req.body.title,
      date: req.body.date,
      subtitle: req.body.subtitle,
      body: req.body.body,
    })
    notice.save()
      .then(doc => res.status(200).send(doc),
        e => res.status(400).send(e))
  });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'))
});

app.listen(port, () => console.log(`Started on port ${port}`))

