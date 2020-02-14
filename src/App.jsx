import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WebFont from 'webfontloader';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import * as routes from './constants/routes';

/* Don't fear the wrappers! Start editing your home page in the Main component. */
import Main from './components/Main';
import Greeting from './components/Greeting';

WebFont.load({
  google: {
    families: ['Indie Flower:400', 'Open Sans:300,400,600,800'],
  },
});

const App = function AppContent() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Router>
          <Switch>
            <Route exact path={routes.GREETING} component={Greeting} />
            <Route path={routes.ROOT} component={Main} />
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
