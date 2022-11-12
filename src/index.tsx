import React from "react";
import ReactDOM from "react-dom";
import "./assets/fonts/clash/clash-display.css";
import "./assets/fonts/satoshi/satoshi.css";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { ContractProvider } from "./context/contract";
import { AuthUserProvider } from "./context/AuthUserContext";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

function getLibrary(provider: any): Web3Provider {
  console.log(provider, "Provider");
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

ReactDOM.render(
  <React.StrictMode>
    <AuthUserProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ContractProvider>
          <Provider store={store}>
            <ChakraProvider theme={theme}>
              <App />
            </ChakraProvider>
          </Provider>
        </ContractProvider>
      </Web3ReactProvider>
    </AuthUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
