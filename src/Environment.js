// @flow
import {
  Environment,
  Network,
  RecordSource,
  Store,
  type RequestNode,
  type Variables,
} from 'relay-runtime';

const SERVER = 'http://localhost:4000/graphql';

async function fetchQuery(
  operation: RequestNode,
  variables: Variables,
): Promise<{}> {
  
  const response = await fetch(SERVER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
  
  return response.json();
}

const environment: Environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),  
});

export default environment;