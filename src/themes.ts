import { createMuiTheme } from '@material-ui/core';

const MainTheme = createMuiTheme({
  typography: {
    fontFamily: ['Poppins', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(
      ','
    ),
  },
});

export default MainTheme;
