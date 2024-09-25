// import React from "react";

//Ejercicio # 1 : Cntador simple.
// class Contador extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { contador: 0 };
//   }
//   incrementar = () =>{
//     this.setState({ contador: this.state.contador + 1});
//   };
//   render(){
//     return (
//       <div>
//         <p>{this.state.contador}</p>
//         <button onClick={this.incrementar}>Incrementar</button>
//       </div>
//     );
//   }
// }
// export default Contador;

//Ejercicio # 2 Ciclo de vida de un componente.
// import React from 'react';
// import Contadordecrementar from './Componentes/Contadordecrementar';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { mostrarcontador: true };
//   }

//   toggleContadordecrementar = () => {
//     this.setState({ mostrarcontador: !this.state.mostrarcontador });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.toggleContadordecrementar}>
//           {this.state.mostrarcontador? "Desmontar contador": "Montar contador"}
//         </button>
//         {this.state.mostrarcontador &&<Contadordecrementar/>}
//       </div>
//     );
//   }
// }

// export default App;

//Ejercicio # 3 Componente opcional. 
// import React from "react";
// import Mensaje from './Componentes/Mensaje';

// class App extends React.Component{
//   constructor (props){
//     super (props)
//     this.state={mostrarMensaje: true};
//   }
  
//   toggleComponente = () =>{
//     this.setState((prevState) => ({
//       mostrarMensaje: !prevState.mostrarMensaje,
//   }));
//   };

//   render(){
//     return(
//       <div>{}
//         {}
//         <button onClick={this.toggleComponente}>
//           {}
//           {this.state.mostrarMensaje
//           ?"Ocultar mensaje": "Mostrar mensaje"}
//         </button>
//         {}
//         {this.state.mostrarMensaje&&<Mensaje/>}
//       </div>
//     )
//   }
// }
// export default App;


