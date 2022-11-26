import App from "./app"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client"
import { BrowserRouter as Router } from "react-router-dom"
import { ModalState } from "./components/context"
import { Provider } from "react-redux"
import React from "react"
import ReactDOM from "react-dom/client"
import store from "./store"

const link = createHttpLink({
  uri: process.env.REACT_APP_BASE_URI,
})

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ModalState>
            <App />
          </ModalState>
        </ApolloProvider>
      </Provider>
    </Router>
  </React.StrictMode>
)
