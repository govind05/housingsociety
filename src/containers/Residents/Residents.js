import React, { Component } from 'react'

import Society from '../../components/';
import Layout from '../../hoc/Layout/Layout';

const RESIDENTS = {
  a: [
    {
      name: 'Lorem.',
      flatNo: 1,
    },
    {
      name: 'Lorem.',
      flatNo: 2,
    },
    {
      name: 'Lorem.',
      flatNo: 3,
    },
  ],
  b: [
    {
      name: 'Lorem.',
      flatNo: 1,
    },
    {
      name: 'Lorem.',
      flatNo: 2,
    },
    {
      name: 'Lorem.',
      flatNo: 3,
    },
  ]
}


export default class Residents extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Society residents={RESIDENTS} />
        </div>
      </Layout>
    )
  }
}
