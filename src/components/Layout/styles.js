import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 100vh;
padding-left: 300px;
box-sizing: border-box;

.container {
  display: flex;
  height: 95%;
  align-items: center;
}

.desc{
  flex-basis: 50%;
}

h1{
  font-size: 50px;
}

p{
  font-size: 17px;
}

button{
  height: 40px;
  display: flex;
  align-items: center;
  padding: 25px;
  font-size: 22px;
  border-radius: 10px;
  background-color: #1A202C;
  color: #FFF;
  border-color: #FFF;
  margin-top: 50px; 
  cursor: pointer;
}

.card{
  background-color: #171717;
  width: 380px;
  height: 660px;
  position: relative;
  left: 20%;
  top: 50px;
  border: 7px solid #171717;
  border-radius: 10px;
}

.seta-direita{
  position: relative;
  left: 10px;
}

.box-desc{
    position: relative;
    top: 271px;
    right: 227px;
    width: 337px;
    height: 50px;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #171717;
}

.card-row{
  padding: 10px;
  display: flex;
  justify-content: space-around;

}

.img{
  border-radius: 15px;
}

.social-media{

  top: 15px;
  display: flex;
  justify-content: space-around;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 15px;
  
}

.insta{
  color: #FFF;
 
   &:hover{
            color: #999;
          }
}
.linkedin{
  color: #FFF;
  
    &:hover{
            color: #999;
          }
}

.github{
  color: #FFF;
  
    &:hover{
            color: #999;
          }
}

.prev{
  text-align: justify;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 10px;
  color: #FFF;
}

.stacks{
  width: 500px;
  object-fit: cover;
  object-position: bottom right;
  display: flex;
  list-style-type: none;  
}
.git{
  margin-right: 20px;

}

.next{
  margin-right: 20px;

}

.react{
    margin-right: 20px;

}
`;



