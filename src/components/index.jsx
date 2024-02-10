import { Link } from "react-router-dom";
import imgIncio from "../assets/img/inicioCibersecurity.jpeg"
import Header from "./template/header";

function Home() {

    return (
        <div className="bg-gray-700 text-white h-full min-h-screen">
            <Header/>

            
            <div className=" pt-5">
                <h1 className="text-6xl text-center font-sans ">¿Que es la ciberseguridad?</h1>
            </div>
            <div className="p-8 flex items-center">
                
                <div className=" ">
                    <img src={imgIncio} className="w-full md:w-1/2 md:float-right p-5" alt="" />
                    <p className="text-justify m-3 text-xl">La ciberseguridad es una serie de procesos, prácticas y controles que ayudan a proteger los sistemas,
                    los dispositivos, las plataformas y la información confidencial de ataques digitales. Estos ataques suelen tener como objetivo el acceso, modificación o destrucción de información importante,
                    la interrupción de la continuidad de los negocios y la extorsión de usuarios a cambio de dinero.</p> 
                    

               
                </div>
            </div>
        </div>

    )
}

export default Home;