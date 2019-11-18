import React from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

import './App.css';


const client = new ApolloClient({
  uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
})

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My First Apollo React Application</h2>
    </div>
  </ApolloProvider>
)

export default App;
