import UserList from '../components/UserList';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import CardU from '../components/CardU';
import { Crown } from 'lucide-react';
import LogoUsam from '../assets/logosU/usamlogo.jpeg'
import LogoUtec from '../assets/logosU/uteclogo.png'
import LogoADB from '../assets/logosU/LogoAndresBello.png'
import LogoUca from '../assets/logosU/LogoUca.jpg'
import { campusAdb, campususam, campusutec, campusuca } from '../assets/campus';
export default function Home() {
    
    return (


        <div className="grid grid-rows-[auto_auto_auto_1fr]  min-h-screen w-full">

            <header className="row-span-1 sticky top-0 w-full opacity-90">
                <Navbar /> {/* Navbar fijo en la parte superior */}
            </header>

            <div className="row-span-2 flex-grow pt-0">
                <Banner />
            </div>

            <div className="txth1 row-span-3">
                <div className="flex  flex-colum justify-center pt-15">
                    <Crown color='#ebd700' size={40}/>
                    <p className='ml-5 text-4xl'>Mejores Universidades</p>
                </div>

            </div>

            <div className="row-span-4 mb-8">
                <div className="unimenu flex flex-row justify-center flex-wrap">
                    <div className="c1 mr-8 w-70">
                        <CardU urlimagen ={LogoUsam} urlbanner={campususam} 
                        title={"USAM"} subtitle={"Especialista en salud e innovacion"} altText="x"/>
                    </div>
                    <div className="c2 mr-8 w-70">
                         <CardU urlimagen ={LogoUtec} urlbanner={campusutec}
                         title={"Utec"} subtitle={"Lider en tecnologia"} altText="x"/>
                    </div>
                    <div className="c3 mr-8 w-70">
                         <CardU urlimagen ={LogoADB} urlbanner={campusAdb}
                         title={"UNAB"} subtitle={"Las mejores instalaciones"} altText="x"/>
                    </div>
                    <div className="c3 mr-8 w-70">
                         <CardU urlimagen ={LogoUca} urlbanner={campusuca}
                         title={"UCA"} subtitle={"Una nueva forma de aprendizaje"} altText="x"/>
                    </div>

                </div>


            </div>
        </div>

    );
}