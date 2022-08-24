import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query Query {
        mentoring {
          _id
          creator {
            _id
            firstName
            lastName
            username
            image
          }
          field
          location
          description
          date
          starred {
            _id
          }
          techKnowHow
          level
          availability
          timeslots
          offer
        }
      }
    `,
  })
  .then((result: any) => console.log(result));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
