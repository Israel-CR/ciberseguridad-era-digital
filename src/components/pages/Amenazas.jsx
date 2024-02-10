import { Link, NavLink } from "react-router-dom";
import Header from "../template/header";
import image from "../../assets/img/incidente-ciberseguridad.jpg"
import image2 from "../../assets/img/amenazas-ciberseguridad-2022.jpg"

function Amenazas() {
    return (
        <div className=" bg-gray-700 h-full min-h-screen text-white">
            <Header />
            <div className="px-10 bg-gray-800 p-2 flex shadow-lg space-x-4 ">
                <Link to={"/"}>Inicio </Link>
                <p>&gt;</p>
                <Link to={"/amenazas"}>Amenazas en la ciberseguridad</Link>
            </div>
            <div className="container px-10 py-5  text-justify text-lg">
                <h1 className=" text-center text-5xl">Cuáles son las amenazas de la seguridad informática?</h1>
                <p className="pt-5">La seguridad informática se esta convirtiendo en una necesidad para todas las personas y especialmente para las empresas. Identificar las principales amenazas de la seguridad cibernetica, ayudara a defenderse de mejor manera por lo que es importante que todos puedan manejar al menos la informacion básica.</p>

                <p>
                    Aunque se cuentan con herramientas de seguridad muy buenas, aún se siguen cometiendo cientos de ataques informáticos cada día. Además, hay otras amenazas que también ponen en peligro datos confidenciales que se almacenan en los sistemas operativos, de modo que es importante conocer cuáles son las principales amenazas de la seguridad informática
                </p>



                <p className="py-5">
                    Las principales amenazas de seguridad son:
                </p>
                <img className="md:w-1/2 float-right p-5" src={image} alt="" />
                <ol className=" pl-4">
                    <li className="py-2"><b>Usuarios:</b> aunque muchos no lo crean, es la principal amenaza, ya sea porque estos no adoptan buenas prácticas de ciberseguridad y se convierten en blancos fáciles o porque son ellos quienes roban información de forma intencional.</li>
                    <li className="py-2">
                        <b>Programas maliciosos:</b> son los que se conocen como malware y consisten en software maliciosos que se encargan de destruir archivos, espiar o robar información. Dentro de ellos están los virus, gusano, troyanos y otros que se explicaran más adelante.
                    </li>
                    <li className="py-2">
                        <b>Fallos de programación: </b>
                        aunque se deban a errores en el desarrollo, representa un gran peligro porque fácilmente podrían infiltrarse software maliciosos y robar información, por esta razón se deben mantener actualizados los sistemas operativos en todos los equipos.
                    </li>
                    <li className="py-2">
                        <b>Intrusos:</b> se trata de personas no autorizadas que se introducen en los programas y archivos para espiar, robar o destruir información.
                    </li>
                    <li className="py-2">
                        <b>Siniestros:</b> en este caso se produce pérdida de información o recursos materiales a consecuencia de la negligencia por falta de oficio de los usuarios o mal intención de estos. Dentro de los siniestros más frecuentes están los incendios e inundaciones.
                    </li>
                    <li className=" py-2">
                        <b>Fallos electrónicos:</b> estos pueden afectar los sistemas debido a fallas en la energía eléctrica o por desperfectos propios de los equipos.
                    </li>
                </ol>

                <h1 className="text-3xl font-medium pt-4">Tipos de ataques informáticos</h1>
                <p className="pt-2">
                    Ningún ataque informático es igual que otro, los objetivos y característica de cada uno son diferentes, sin embargo, las técnicas que usan los ciberdelincuentes para llevarlos a cabo generalmente son las mismas y en base a eso los podemos clasificar en:
                </p>
                <img className="md:w-1/2 float-right p-5" src={image2} alt="" />
                <ul className="pl-4 pt-3">
                    <li className="py-2">
                        <b>Malware:</b> consisten en software maliciosos que se ejecutan en los sistemas operativos a fin de acceder a información sensible. Hay algunos que necesitan que el usuario los ejecute para que puedan ponerse en marcha como los virus, pero hay otros que pueden introducirse sin que los usuarios realicen alguna acción y pasan más tiempo sin ser detectados como gusanos y troyanos.
                    </li>
                    
                    <NavLink to={"/amenazas/malware"} className="text-xl border-b border-blue-500 hover:font-bold text-blue-400">mas informacion sobre el malware</NavLink>
                    <li className="py-2">
                        <b>Phishing:</b> a través de técnicas de ingeniería social los delincuentes suplantan la identidad de personas de confianza para los usuarios y los convencen para obtener información de valor como datos bancarios.</li>
                        <NavLink to={'/amenazas/phishing'}  className="text-xl border-b border-blue-500 hover:font-bold text-blue-400">mas informacion sobre el Phishing</NavLink>
                        <li className="py-2">
                           <b>Ataques de inyección SQL:</b>  consiste en la introducción de códigos maliciosos a través de vulnerabilidades de una aplicación web para acceder a los servidores y extraer información. En este tipo de ataques lo usuarios del sitio web no tienen forma de cómo defenderse, ya que el problema no está en ellos o sus equipos sino en el sitio web y los únicos que pueden solucionar el problema son los administradores.
                        </li>
                        <NavLink  to={"/amenazas/inyeccion-sql"}  className="text-xl border-b border-blue-500 hover:font-bold text-blue-400">mas informacion sobre los Ataques de inyecccion SQL</NavLink>
                        <li className="py-2">
                           <b>Denegación de servicio (DoS):</b>  en esta modalidad de ataque los ciberdelincuentes infectan con gusanos diferentes equipos y a través de ellos saturan sitios web, impidiendo que este pueda funcionar a causa del exceso de tráfico. Debido a que son ejecutados desde diferentes equipos y direcciones IP, resulta difícil detener este tipo de ciberataque.
                        </li>
                        <NavLink to={"/amenazas/dos"} className="text-xl border-b border-blue-500 hover:font-bold text-blue-400">mas informacion sobre el Ataque de denegacion de Servicios</NavLink>
                </ul>


            </div>

        </div>

    )
}

export default Amenazas;