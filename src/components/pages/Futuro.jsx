import { Link } from "react-router-dom";
import Header from "../template/header";
import image from "../../assets/img/FuturoCiberseguridad.jpg"
function Futuro(){
    return (
        <div className="bg-gray-600 text-white h-full min-h-screen">
            <Header/>
            <div className="px-10 bg-gray-800 p-2 flex shadow-lg space-x-4 ">
                <Link to={"/"}>Inicio </Link>
                <p>&gt;</p>
                <Link to={"/historia"}>Historia de la Ciberseguridad</Link>
                <p>&gt;</p>
                <Link to={"/historia/futuro"}>El futuro de la Ciberseguridad</Link>
            </div>
            <div className="container px-10 py-5  text-justify text-lg">
                <h1 className="text-center  text-5xl font-semibold mb-3">El futuro de la ciberseguridad</h1>
                <img className="float-left w-full md:w-1/3 lg:w-1/2 m-3 pt-5" src={image} alt="" />
                <p className=" pt-2">
                    
                De acuerdo con expertos en el sector, la seguridad informática en Latinoamérica seguirá evolucionando, considerando que algunos países de la región padecen grandes porcentajes de ataques cibernéticos. Algunos pronósticos para la ciberseguridad, a partir del 2023, incluyen la multiplicación del ransomware, el incremento de ataques en redes sociales, más phishing, geo dirigido, entre otros tipos de ataques.
                </p>
                
                <p className="pt-2">
                Por el otro lado, también se prevé un incremento de protección y prevención contra ciberataques en el mundo empresarial, mejores medidas preventivas para las redes, software y dispositivos, más herramientas para el análisis del comportamiento y la detección de errores en las operaciones de red, para la ubicación de las anomalías y para la revisión y control.  Además, los gobiernos, las asociaciones, los proveedores de seguros y las relaciones internacionales se unen con el propósito de proteger la información tanto propia como de los usuarios
                </p>
            </div>

            
        </div>
    )
}


export default Futuro;