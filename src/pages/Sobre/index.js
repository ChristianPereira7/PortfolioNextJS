import { NavBar} from './styles';
import Link from 'next/link'; 



function Sobre() {
  return(
  
    <NavBar>
      <div className="container">
        <div className="Logo">
            <Link href="/">
              <a className="logo">Christian Pereira</a>
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
      <div> 
          Página Sobre
      </div>
    </NavBar>
  
  
  );
}

export default Sobre;