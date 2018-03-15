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

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', router);

/*
*Residents API
*/

router.route('/residents')
  /*
  *Get All Residents
  */
  .get((req, res) => {
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
  /*
  *Add Residents
  */
  .post((req, res) => {
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

router.route('/notices')
  .get((req, res) => {
    Notice.find()
      .then(notices => {
        res.status(200).send(notices);
      }, e => res.status(400).send(e))
  })
  .post((req, res) => {
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

