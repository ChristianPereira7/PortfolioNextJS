import Header from '../Header'; 
import { Container} from './styles';



function Layout({children}){
  return(
    <>
      <Header>

      </Header>
    
      <Container>
    
            {children}
       
      </Container>
    </>
  );
}


export default Layout;