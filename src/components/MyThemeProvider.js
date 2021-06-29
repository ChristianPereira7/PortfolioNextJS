import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '../styles/theme';
import useSettings from '../components/hooks/useSettings';


function MyThemeProvider({ children }) {
  const { settings } = useSettings();
  console.log(settings);
  const theme = createTheme({ theme: settings.theme });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MyThemeProvider;