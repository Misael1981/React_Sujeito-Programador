import React from "react";

const BemVindo = (props) => {
  return(
    <div>
      <h2>Bem-vindo(a) {props.nome} </h2>
      <h3>Tenho {props.idade} anos</h3>
    </div>
  )
} 

function App(){
  return(
    <div>
      Olá Mundo
      <BemVindo nome="Misael" idade="24"/>
      <BemVindo nome="Fabiana" idade="19"/>
      <h1>Curso de React</h1>
    </div>
  )
}



export default App;