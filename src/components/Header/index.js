import { NavBar} from './styles';
import Link from 'next/link'; 
import useSettings from '../hooks/useSettings';
import IconButton from '@material-ui/core/IconButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { THEMES } from '../utils/constants';


function Header() {


  const {settings, saveSettings } = useSettings();


  return(
  
    <NavBar>
      <div className="container">
        <div className="Logo">
            <Link href="/">
              <a className="logo">Christian</a>
            </Link>
        </div>
        <nav>
          <ul>
            <li>
                <Link href="/">
                  Portfolio           
                </Link>
              </li>
              <li>
                <Link href="/Sobre">
                  Sobre              
                </Link>
              </li>
          </ul>
          <IconButton>
            {settings.theme === THEMES.DARK ? (
              <Brightness7Icon
                onClick={() => saveSettings({ theme: THEMES.LIGHT })}
              />
            ) : (
              <Brightness4Icon
                onClick={() => saveSettings({ theme: THEMES.DARK })}
              />
            )}
          </IconButton>

        </nav>
      </div>

    </NavBar>
  
  
  );
}

export default Header;