import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import * as _ from 'lodash';

import Society from '../../components/Society/Society';
import Wings from '../../components/Society/Wings/Wings';
import Layout from '../../hoc/Layout/Layout';

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

export default class Residents extends Component {
  render() {
    let wings = _.keys(RESIDENTS).sort();
    return (
      <Layout>
        <div>
          <h1 style={{ color: '#333' }}>Choose Wing</h1>
          <Wings wings={wings} />
          <Switch>
            <Route path='/residents/:wing' render={() => <Society residents={RESIDENTS} />} />
            <Redirect to={`/residents/${wings[0]}`} />
          </Switch>
        </div>
      </Layout>
    )
  }
}
