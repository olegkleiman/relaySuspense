// flow
import type { TableReport_list } from './__generated__/TableReport_list.graphql.js';

import React from 'react';
import { graphql, useFragment } from 'react-relay/hooks';

const itemsFragment = graphql`
    fragment TableReport_list on Report{
        items {
            id
            day
            dayOfWeek
            entry
            exit
            note
        }
    }`

const TableReport = (props: TableReport_list) => {

    const data = useFragment(itemsFragment,
                             props.list);

    return <ul>
            {
                data.items.map( (item, index) => {
                    return <li key={index}>{item.entry} - {item.exit}</li>
                })
            }
           </ul>  
            
}

export default TableReport;