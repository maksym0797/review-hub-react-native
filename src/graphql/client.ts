import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const httpLink = new HttpLink({uri: 'http://localhost:8080/query'});

let token = '';
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([httpLink]),
});
export const setToken = (bearerToken: string) => {
  token = bearerToken;
  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers

    operation.setContext(({headers = {}}) => ({
      headers: {
        ...headers,
        authorization: token,
      },
    }));

    return forward(operation);
  });
  client.setLink(authMiddleware);
};
