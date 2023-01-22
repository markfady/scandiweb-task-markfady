import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import "@fontsource/raleway";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import reportWebVitals from './reportWebVitals';
import {ApolloClient,ApolloProvider,InMemoryCache } from "@apollo/client";
import { Provider } from 'react-redux';
import {store} from "./rtk/store"

const client = new ApolloClient({
  uri:"http://localhost:4000/",
  cache:new InMemoryCache() 
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
      <App />
      </Provider>
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
