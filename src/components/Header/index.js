import { NavBar} from './styles';
import Link from 'next/link'; 




function Header() {
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
        </nav>
      </div>
    </NavBar>
  
  
  );
}

export default Header;