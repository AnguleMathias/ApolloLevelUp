import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider, Query} from "react-apollo";
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
    uri: 'https://api-euwest.graphcms.com/v1/cjr1kgw810n2901dnojl3r4lu/master'
});

const POSTS_QUERY = gql`
    {
      posts {
        id
        title
        body
      }
    }
`;

// client
//     .query({
//         query: testQuery
//     })
//     .then(res => console.log(res));

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </header>
                    <Query query={POSTS_QUERY}>
                        {({loading, data}) => {
                            if (loading) return 'Loading....';
                            const { posts } = data;
                            return posts.map(posts => <h1>{posts.title}</h1>)
                        }}
                    </Query>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
