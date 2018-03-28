import React from 'react';
import { View, Text } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Header from './header';
import Feed from './feed';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

export default () => (
  <ApolloProvider client={client}>
    <View>
      <Header />
      <Feed />
    </View>
  </ApolloProvider>
);
