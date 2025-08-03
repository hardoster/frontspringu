import UserList from '../components/UserList';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import backgroundImage from '../assets/bg1.jpg'
import { Link } from "react-router-dom"; // Importa Link


export default function Home() {
  return (

    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Gradiente oscuro (de transparente a negro) */}
      <div className="absolute inset-0 bg-linear-10 from-stone-950 to-stone-950 opacity-75"></div>

      <div className="relative z-10 grid grid-flow-col grid-cols-3 gap-4 pt-85">

        <div className="logo flex justify-end" >

          <p className='text-9xl font-bold text-white font-sans'>H</p>
        </div>

        <div className="texto grid grid-flow-col grid-rows-5 col-span-2">
          <div className="c1"><p className='text-white font-bold text-4xl text-left'>No sabes donde estudiar?</p></div>
          <div className="c2"><p className='text-white font-medium text-2xl text-left'>encuentra las mejores ofertas academicas</p></div>
          <div className="c3"><p className='text-white font- text-xl text-left'>de El Salvador</p></div>
          <div className="c4"></div>
          <div className="c5 flex justify-start">
            <Link to="/home1">
              <button className='text-center w-40 text-white btninit !bg-transparent !border-2 
              !border-white '>Iniciar</button>
            </Link>
          </div>
        </div>


      </div>
    </div>


  );
}