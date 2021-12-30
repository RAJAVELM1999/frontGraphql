import Vue from 'vue';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from 'apollo-link-error';
import { ApolloClient } from 'apollo-client';
import VueApollo from 'vue-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

Vue.use(VueApollo);

const cache = new InMemoryCache({
    addTypename: false
});

const link = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message }) => {
            Vue.fire({
                title: 'Error!',
                text: message,
                type: 'error',
                clean: false,
                duration: -1
            });
        });
    }
});

export const apolloClient = new ApolloClient({
    link: link.concat(
        createUploadLink({
            uri: 'http://localhost:5555/graphql',
            headers: {}
        })
    ),
    cache
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});

export default apolloProvider;