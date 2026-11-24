import logo from './imagenes/logo.png';
import './App.css';
import Boton from './componentes/Boton';
import './hojas-de-estilo/Boton.css'
import { Contador } from './componentes/Contador';
function App() {


  const manejarClic = () =>{
    console.log("Clic");
  }

  const reiniciarContador = () =>{
    console.log('reinicia');
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img className='logo' 
        src={logo} 
        alt='Logo de mi contador' />
      </div>

     

      <div className='contenedor-principal'>

         <Contador numClics='5' />
        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        /> 

        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />   
      </div>
    </div>
  );
}

export default App;
