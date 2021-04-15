import { render } from 'react-dom';
import { Provider } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core';
import { store } from 'store';
import App from 'components/App/App';
import MainTheme from 'themes';

render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={MainTheme}>
        <App />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById('root')
);
