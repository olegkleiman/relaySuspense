// @flow
import type { AppQuery } from './__generated__/AppQuery.graphql';

import React from 'react';
import { graphql, useQuery, useLazyLoadQuery } from 'react-relay/hooks';


const query = graphql`
        query AppQuery ($year: Int!, $month: Int!){
          me {
            id
            name
            report(month: $month, year: $year) {
              id
              month
              year
            }
          }
        }
      `;


const App = (props) => {

    const options = {
        fetchPolicy: 'network-only' //'store-only'
    }

    const variables = {
        year: 2019,
        month: 12
    }

    const data = useLazyLoadQuery<AppQuery>(
        query,
        variables, 
        options);

    return <div>{data.me?.name}</div>
}

export default App;