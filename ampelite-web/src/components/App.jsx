import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Switch, Route, } from 'react-router-dom';
import { MainWarpper } from './';
import { Signin, Signup } from '../containers';
import { grey, indigo, blue } from 'material-ui/colors';

// const fontWeightMedium = 500;
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blue,
  },
  // typography: {
  //   // Use the system font.
  //   fontFamily:
  //     '-apple-system,system-ui,BlinkMacSystemFont,' +
  //     '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  //   // fontWeightMedium,
  //   // button: {
  //   //   fontStyle: 'italic',
  //   // },
  // },
});

const App = () => (
      <MuiThemeProvider theme={theme}>
        <div style={{ height: '100vh', backgroundColor: grey[50] }}>       
          <Switch>
            <Route exact path="/AmpeliteWeb" component={MainWarpper} />
            <Route path='/AmpeliteWeb/sign-in' component={Signin} />
            <Route path='/AmpeliteWeb/sign-up' component={Signup} />
          </Switch>
        </div>
      </MuiThemeProvider>
)

export default App;
