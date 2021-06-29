import styled from "styled-components"

export const NavBar = styled.div`
height: 60px;
width: 100%;
position: fixed;
border-bottom: 1px solid #171717;


.container{
max-width: 1000px;
margin: auto;
display: flex;
justify-content: space-between;

}

a{
  text-decoration: none;
  color: inherit;
}

.logo{
flex: 1;
display: flex;
align-items: center;
font-size: 27px;
font-weight: bold;
height: 60px;
}

nav{
  padding: 10px;
  padding-bottom: 10px;
  display: flex;


    ul, li{
      margin: 0;
      padding: 0;
      list-style: none;
    }
    ul{
      display: flex;
      align-items: center;
      height: 40px;
    }
    li{
        margin-left: 20px;
        margin-right: 20px;
        
        a{
          font-size: 15px;
          text-decoration: none;
               
          &:hover{
            color: #999;
          }
      
        }
        
    }

}


`;
