// import React from "react"; 

// class Mensaje extends React.Component {
//     constructor (props){
//         super(props);
//         this.state= {mensaje: "Has clic en el botón"};

//     }
//     componentDidMount(){
//         console.log ("El componente se ha montado.")
//     }

//     cambiarMensaje = () =>{
//         this.setState({mensaje: "El mensaje se ha cambiado"});
//     };

//     componentDidUpdate(){
//         console.log("El componente se ha actualizado.");
//     }

//     componentWillUnmount() {
//         console.log("El componente se ha desmontado.");
//     }

//     render(){
//         return (
//             <div>
//                 { ""}
//                 {}
//                 {}
//                 <p>{this.state.mensaje}</p>
//                 {}
//                 <button onClick={this.cambiarMensaje}>Cambiar el mensaje</button>
//             </div>
//         );
//     }
// }
// export default Mensaje;