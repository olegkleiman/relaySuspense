// @flow
import type { AppQuery } from './__generated__/AppQuery.graphql.js';

import React from 'react';
import { graphql, useQuery, useLazyLoadQuery } from 'react-relay/hooks';

import TableReport from './TableReport';

const query = graphql`
        query AppQuery ($year: Int!, $month: Int!){
          me {
            id
            name
            report(month: $month, year: $year) {
              id
              month
              year
               ...TableReport_list
            }
          }
        }
      `;


const App = () => {

    const options = {
        fetchPolicy: 'store-or-network' //'network-only' 
    }

    const variables = {
        year: 2019,
        month: 12
    }

    const data = useLazyLoadQuery<AppQuery>(
        query,
        variables, 
        options);

    return <>
             <div>{data.me?.name}</div>
             <TableReport list={data.me.report}/>
           </>    
}

export default App;