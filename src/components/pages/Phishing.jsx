import { Link } from "react-router-dom";
import Header from "../template/header";
import image1 from "../../assets/img/phishing.jpg"

function Phishing() {
    return (
        <div className="bg-gray-600 h-full min-h-screen text-white">
            <Header />
            <div className="px-10 bg-gray-800 p-2 flex shadow-lg space-x-4 ">
                <Link to={"/"}>Inicio </Link>
                <p>&gt;</p>
                <Link to={"/amenazas"}>Amenazas en la ciberseguridad</Link>
                <p>&gt;</p>

                <Link to={"/amenazas/phishing"}>Phishing</Link>
            </div>
            <div className="container px-10 py-5  text-justify text-lg">
                <h1 className=' text-5xl text-center font-semibold pb-5'>
                    ¿Que es el Phishing?</h1>
                <img className="float-left md:w-1/2  p-5" src={image1} alt="" />
                <p className="py-2">
                    El phishing es una técnica de ingeniería social que consiste en el envío de correos electrónicos que suplantan la identidad de compañías u organismos públicos y solicitan información personal y bancaria al usuario. A través de un enlace incluido en el email, intentan redirigirlo a una página web fraudulenta para que introduzca su número de tarjeta de crédito, DNI, la contraseña de acceso a la banca online, etc.
                </p>
                <p className="py-2">
                    Estos correos electrónicos fraudulentos suelen incluir el logotipo o la imagen de marca de la entidad, pueden contener errores gramaticales y en ocasiones intentan transmitir urgencia y miedo para que el usuario realice las acciones que le solicitan.
                </p>

                <p>

                    Un email de tipo phishing también puede llevar un archivo adjunto infectado con software malicioso. El objetivo de este malware es infectar el equipo del usuario y robar su información confidencial.
                </p>

                <h1 className="text-3xl text-left  font-medium pt-5">Cómo protegerse del phishing</h1>
                <div className="ml-4">
                    <li className="py-2">Revisar detenidamente el remitente del correo para comprobar si es el oficial, por el contrario, contiene palabras o caracteres extraños que no se corresponden con la compañía que dice ser.</li>
                    <li className="py-2">Evitar introducir datos personales o bancarios en una página web a la que se ha accedido a través de un enlace incluido en un email. Siempre es preferible teclear la dirección web en el navegador para acceder a una página. Por regla general, ninguna compañía u organismo público solicita información personal o sensible a través de estos canales.</li>
                    <li className="py-2">
                        No descargar archivos adjuntos en correos electrónicos que resulten sospechosos o que no se esperaban.
                    </li>
                </div>

            </div>
        </div>
    )
}

export default Phishing;