import { Link } from "react-router-dom";
import Header from "../template/header";

import image1 from "../../assets/img/HistoriaSeguridadCibernetica.jpg";
import image from "../../assets/img/historia-ciberseguridad.jpg";

function Historia() {
    return (
        <div className=" bg-gray-600 h-full min-h-screen text-white">
            <Header />
            <div className="px-10 bg-gray-800 p-2 flex shadow-lg space-x-4 ">
                <Link to={"/"}>Inicio </Link>
                <p>&gt;</p>
                <Link to={"/historia"}>Historia de la Ciberseguridad</Link>
            </div>
            <div className="container px-10 py-5  text-justify text-lg">
                <h1 className="text-center  text-5xl font-semibold">Historia de la Ciberseguridad</h1>
                <p className="text-justify text-wrap text-lg pt-2">
                    La historia de la ciberseguridad no es tan antigua como podríamos pensar, en realidad, surge a partir de la segunda mitad del siglo XX, y ha atravesado diferentes etapas hasta llegar a lo que es hoy.
                </p>
                <img className="md:float-right md:w-1/2 m-3" src={image1} alt="" />
                <h2 className="text-3xl font-medium pt-4">  Historia y evolución de la ciberseguridad: desde la década de los 50 hasta la actualidad</h2>
                <p className="text-justify text-lg pt-2">La ciberseguridad no nació hasta que se comenzaron a conectar los equipos y a desarrollarse redes de computadoras, lo cual ocurrió en 1950, cuando se crearon las primeras redes informáticas y módems. Fue en 1960 cuando la ciberseguridad comenzó a tomar la forma que conocemos en la actualidad. </p>
                <p className="text-justify text-lg pt-2" >Con este contexto en mente, se puede separar la primera parte de la historia de esta disciplina en dos partes: antes y después de la invención del Internet. Antes del Internet, la única forma de dañar un dispositivo era acceder físicamente a él, por lo tanto, el delito era considerado como “allanamiento de morada” y no ciberataque. Después de la invención del Internet a finales de los 60 fue cuando nace el ciberespacio, lo que significó un nuevo entorno y una nueva posibilidad para los ciberdelincuentes.
                </p>

                <h1 className="text-3xl font-semibold pt-5">La seguridad informática en los años 70 y el nacimiento del antivirus comercial en los años 80</h1>
                <img className="float-left w-full md:w-1/2 lg:w-1/2 m-4 " src={image} alt="" />
                <p className='text-justify text-lg'>
                    A medida que las empresas comenzaron a utilizar la web, controlar el acceso a los datos en los sistemas se convirtió en un punto importante de preocupación a mediados o finales de la década de 1960. Entre las primeras medidas para proteger la información se incluye el procesamiento de periodos, donde se separaban las actividades por partes y los usuarios podían manipular la información en un tiempo determinado, establecido por los expertos de ciberseguridad.
                </p>
                <p>
                    En 1970 el investigador Bob Thomas desarrolló un programa informático llamado Creeper, que podía moverse a través de la red de ARPANET (la primera red de computadoras) y para evitar esto, Ray Tomlinson, el creador del correo electrónico, desarrolló el programa Reaper, que se encargaba de perseguir y eliminar a los Creepers. Reaper fue el primer sistema antivirus de malware y el primer programa con la capacidad de auto replicarse, es decir, fue el primer virus y a partir de esto se crearon los primeros gusanos y troyanos informáticos (es importante mencionar que no eran para nada programas maliciosos).
                </p>

                <h1 className="text-3xl font-semibold pt-5">Incremento de amenazas a partir del 2000</h1>

                <p>
                    A principios de la década de 2000, las organizaciones criminales comenzaron a financiar en gran medida los ataques cibernéticos profesionales y los gobiernos comenzaron a tomar medidas drásticas contra la ciberdelincuencia. En estos años la Seguridad Informática comenzó a avanzar, pero lamentablemente también los virus y los programas maliciosos también fueron sofisticándose.

                    A partir del 2021, la industria de la ciberseguridad ha crecido a una velocidad sorprendente. De acuerdo con la plataforma online alemana especializada en datos de mercado y consumo, Statista, se pronostica que el tamaño del mercado mundial de Ciberseguridad crecerá a 345,4 mil millones de dólares para 2026. Como dato adicional, el ransomware es una de las amenazas más comunes para la seguridad de los datos de cualquier organización y se prevé que siga aumentando.
                </p>
                <p className="mt-6 text-justif">
                    <Link className=" text-2xl hover:font-bold text-blue-400" to={"/historia/futuro"}> Te puede interesar: ¿Cuál es el futuro de la ciberseguridad?</Link>
                </p>


            </div>
        </div>

    )
}


export default Historia;