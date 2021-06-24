import Header from '../Header'; 
import { Container, ContentContainer } from './styles';



function Layout({children}){
  return(
    <>
      <Header></Header>
    
      <Container>
          <ContentContainer>
            {children}
          </ContentContainer>
      </Container>
    </>
  );
}


export default Layout;