import { NavLink, Link } from "react-router-dom";
import Header from "../template/header";
import image from "../../assets/img/tecnologias-ciberseguridad.jpg"
import image1 from "../../assets/img/gettyimages.jpg"

function Tecnologias() {
    return (
        <div className=" bg-gray-700 h-full min-h-screen text-white">
            <Header />
            <div className="px-10 bg-gray-800 p-2 flex shadow-lg space-x-4 ">
                <Link to={"/"}>Inicio </Link>
                <p>&gt;</p>
                <Link to={"/tecnologias"}>Herramientas y tecnologias</Link>
            </div>
            <div className="container px-10 py-5  text-justify text-lg">
                <h1 className="text-center text-5xl mb-5">Herramientas y tecnologias</h1>
                <img className="float-start p-5 md:w-2/5" src={image} alt="" />

                <p className="py-2">
                    Los cibercriminales no son un problema menor en un mundo hiperconectado como el actual. Según Cybersecurity Ventures, el cibercrimen le costará al mundo $6 billones de dólares anuales para 2021, una cifra mayor a la entregada por el comercio mundial de todas las principales drogas ilegales combinadas.
                </p>
                <p className="py-2">
                    Vivimos en un mundo que cada vez está más digitalizado, por lo que es fundamental que todas las empresas tengan preparado un plan estratégico de ciberseguridad. De esta manera, podrán evitar al máximo los posibles ataques hechos por ciberdelincuentes.
                </p>
                <p className="py-2">
                    Para cualquier empresa es primordial conocer la actividad que se está produciendo en su red informática y así poder detectar las actividades sospechosas realizadas por parte de los ciberdelincuentes. Las herramientas de ciberseguridad son la mejor respuesta a esta necesidad y es que no solo son eficientes en la identificación y análisis de ataques, sino que también permiten una respuesta contundente en el momento idóneo.
                </p>

                <h1 className="text-3xl font-medium py-5">
                    Herramientas para la seguridad informatica
                </h1>

                <li className="py-2">
                    <b>Software antivirus: </b>En cualquier caso, todos los computadores conectados a la red, personales y corporativos, deben contar con un antivirus gratuito y confiable. Este tipo de programas permite contar con medidas de protección efectivas ante la detección de malware u otros elementos maliciosos, por medio de ofrecer la posibilidad de eliminar las posibles amenazas o poner al dispositivo en estado de “cuarentena”. <br />
                    Dentro del mercado, existen soluciones que integran diferentes funcionalidades adaptables a las necesidades de cada organización. Sin embargo, es importante que la que se adopte cuente con las actualizaciones pertinentes para así no quedar caducas ante nuevas amenazas.
                </li>
                <li className="py-2">
                  <b>Firewall perimetral de red:</b> Es una de las herramientas de ciberseguridad más recomendadas. Su funcionamiento es simple: escanea los paquetes de red, permitiéndoles o bloqueándolos según las reglas definidas por un administrador.
                  <p className="py-1">
                  Si bien es cierto que su estructura es básica si se compara a la sofisticación de las amenazas, se pueden encontrar firewalls modernos que pueden clasificar los archivos utilizando varios parámetros. Así, se puede inspeccionar con eficiencia el tráfico web, identificar a usuarios, bloquear el acceso que no está autorizado, entre otras acciones.
                  </p>
                </li>
                <img className="md:w-1/2 float-right p-5" src={image1} alt="" />
                <li className="py-2">
                    <b>Servidor proxy:</b> Un proxy es un dispositivo o programa informático que actúa como intermediario entre las conexiones del navegador e Internet, filtrando todos los paquetes entre ambos. Está catalogada como una de las buenas herramientas de seguridad informática debido a que, por medio de ella, se puede bloquear sitios web que se estimen como peligrosos o prohibidos dentro del ambiente laboral. <br />
                     Por otro lado, permite establecer un sistema de autentificación, el cual limita el acceso a la red externa, permitiendo contar con registros sobre sitios, visitas, entre otros datos.
                </li>
                
                <li className="py-2">
                    <b>Cifrado de punto final o end point disk encryption:</b>  Es un proceso de codificación de datos para que no pueda ser leído o utilizado por nadie que no tenga la clave de descifrado correcta. En esencia, protege los sistemas operativos de la instalación de archivos de arranque corruptos, bloqueando los archivos almacenados en computadores, servidores, entre otros puntos finales.
                </li>
                <li className="py-2">
                    <b>Escáner de vulnerabilidades:</b> Es una de las herramientas de seguridad en sistemas informáticos fundamentales en las empresas de cualquier tamaño. Consiste en un software que se encarga de detectar, analizar y gestionar los puntos débiles del sistema. <br />
                    Gracias a esta plataforma, se puede mantener controlada la exposición de los recursos empresariales a las amenazas de ciberseguridad y sus posibles consecuencias. Además, permite alertar en tiempo real, lo que ayuda a la solución de problemas de forma oportuna y sin comprometer la continuidad del negocio

                </li>
            </div>

        </div>
    )
}

export default Tecnologias;