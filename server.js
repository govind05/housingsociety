const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT||3000; 
const RESIDENTS = {
  c: [
    {
      name: 'Lorem.',
      flatNo: 402,
      floor: 4,
    },
    {
      name: 'Lorem.',
      flatNo: 401,
      floor: 4,
    },
    {
      name: 'Govind',
      flatNo: 501,
      floor: 5,
    },
    {
      name: 'Govind',
      flatNo: 203,
      floor: 2,
    },
    {
      name: 'Lorem.',
      flatNo: 101,
      floor: 1,
    },
    {
      name: 'Lalit',
      flatNo: 103,
      floor: 1,
    },
    {
      name: 'Govind',
      flatNo: 303,
      floor: 3,
    },
  ],
  b: [
    {
      name: 'Lorem.2',
      flatNo: 101,
      floor: 1,
    },
    {
      name: 'Lorem.2',
      flatNo: 202,
      floor: 2,
    },
    {
      name: 'Lorem.2',
      flatNo: 303,
      floor: 3,
    },
  ],
}

app.use(express.static(path.join(__dirname, 'build')));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api', router);


router.route('/residents')
.get((req,res) => {
  res.status(200).json(RESIDENTS)
})

app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, 'build/index.html'))
});

app.listen(port, () => console.log(`Started on port ${port}`))

