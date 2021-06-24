import styled from "styled-components"

export const Container = styled.div`
width: 100%;
height: 100vh;
padding-left: 300px;
box-sizing: border-box;
color: #FFF;

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
  width: 360px;
  height: 450px;
  position: relative;
  left: 50%;
  border: 10px solid;
  border-radius: 10px;
}

.github{
  position: relative;
  left: 10px;
}

`;



