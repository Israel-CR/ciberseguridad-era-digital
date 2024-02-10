import { useState } from "react";
import { Link } from "react-router-dom";

function Header(){
    const [estadoNav, setEstadoNav] = useState(false);
    const activarNav = ()=> {
            setEstadoNav(!estadoNav)
    }
    return (
        <div className="bg-gray-900 p-5 flex md:flex-row flex-col sticky  top-0 left-0 right-0">
                <Link to={"/"} className=" text-2xl font-mono font-extrabold">cYsecuritY</Link>
                <button onClick={activarNav} className="absolute  right-5 border px-2 py-1 rounded-lg md:hidden">menu</button>
                <nav className="hidden md:flex  flex-grow">
                    <ol className="bg-transparent rounded-md px-6 py-2 flex space-x-4">
                        <li ><Link to={"/"} className="text-white hover:text-gray-600" >Inicio</Link></li>
                        <li><Link to={"/historia"} className="text-gray-400 hover:text-gray-600" >Historia</Link></li>
                        <li><Link to={"/amenazas"} className="text-gray-400 hover:text-gray-600" >Amenazas</Link></li>
                        <li><Link to={"/tecnologias"} className="text-gray-400 hover:text-gray-600" >Tecnologias</Link></li>
                        
                        <li><Link to={"/educacion"} className="text-gray-400 hover:text-gray-600" >Educacion</Link></li>
                       

                    </ol>
                </nav>
                <nav className={estadoNav ? 'block  space-y-4 px-2 pb-3 pt-2' : 'hidden '}>
                    <ol className="bg-transparent rounded-md px-6 py-2 flex-wrap space-x-4 gap-4">
                        <Link to={"/"} className=" text-white hover:text-gray-600 block border-y" >Inicio</Link>
                        <Link to={"/historia"} className="text-gray-400 hover:text-gray-600 block border-b" >Historia</Link>
                        <Link to={"/amenazas"} className="text-gray-400 hover:text-gray-600 block border-b" >Amenazas</Link>
                        
                        <li><Link to={"/tecnologias"} className="text-gray-400 hover:text-gray-600 block border-b" >Tecnologias</Link></li>
                        
                        <li><Link to={"/educacion"} className="text-gray-400 hover:text-gray-600 block border-b" >Educacion</Link></li>
                        

                    </ol>
                </nav>
            </div>
    )
}


export default Header;