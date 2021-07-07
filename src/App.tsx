import React from "react";
import { theme } from "@constants";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Router from "router";
import { store, persistor } from "@redux/store";
import "@firebase";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <MaterialThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </MaterialThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
