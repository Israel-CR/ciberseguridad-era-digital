import { Link } from "react-router-dom";
import Header from "../template/header";
import image from "../../assets/img/dos-ataques-DDoS-más-grandes-historia.jpg";
import image1 from "../../assets/img/Academy-What-is-DDoS-01.png";

function AtaqueDoS(){
    return (
        <div className="bg-gray-600 h-full min-h-screen text-white">
            <Header />
            <div className="px-10 bg-gray-800 p-2 flex shadow-lg space-x-4 ">
                <Link to={"/"}>Inicio </Link>
                <p>&gt;</p>
                <Link to={"/amenazas"}>Amenazas en la ciberseguridad</Link>
                <p>&gt;</p>

                <Link to={"/amenazas/dos"}>Ataque DoS</Link>
            </div>
            <div className="container px-10 py-5  text-justify text-lg">
                <h1 className=' text-5xl text-center font-semibold pb-5'> Ataque de Denegacion de Servicios(DoS)</h1>
                <img className="md:w-1/3 float-right ml-5" src={image} alt="" />
                <p className="py-2">
                    En un ataque de denegación de servicio, un hacker usa un programa para inundar un servidor con tráfico malicioso. Las solicitudes que componen este tráfico parecen provenir de usuarios legítimos, por lo que el servidor valida solicitud tras solicitud. En efecto, el "servicio" se "niega" a los usuarios legítimos debido a la pérdida resultante de ancho de banda y recursos de red.
                </p>
                <p className="py-2">
                    El sistema o los datos atacados dejan de estar disponibles para los usuarios que los necesitan. Los ataques DoS a menudo se usan para la extorsión porque, por ejemplo, una empresa que no puede brindar su servicio a los clientes puede perder ingresos y su reputación se puede ver dañada. En este sentido, un ataque DoS es similar al ransomware, pero el rehén es el servicio de la víctima, en lugar de sus datos.
                </p>
                <h2 className="text-3xl font-medium pt-5" >¿Cuál es la diferencia entre un ataque DoS y un ataque DDoS?</h2>
                <img className="md:w-1/2 float-start p-5 my-2" src={image1} alt="" />
                <p className="py-2">
                    Cuando un ataque DoS proviene de una sola fuente, un ataque de denegación de servicio distribuido o un ataque DDoS transmite solicitudes fraudulentas de múltiples fuentes a la vez. Por lo general, un perpetrador aprovechará un grupo de dispositivos conectados a Internet, a veces a escala global, para inundar el servidor de destino, lo que puede abrumarlo mucho más fácilmente que un ataque DoS.
                </p>
                <p className="py-">
                    Ese grupo de ordenadores infectados se denomina botnet. Las botnets funcionan de manera sincronizada, esperando instrucciones de un atacante en una sola dirección IP para lanzar un ataque de inundación. Estos ataques generalmente están programados para comenzar en un momento específico y pueden durar horas o incluso días.
                </p>
                <p className="py-2">
                Un servidor que se enfrenta a un ataque DoS puede simplemente cerrar la única conexión que realiza el ataque. Los ataques DDoS son mucho más peligrosos y difíciles de mitigar porque la afluencia de tráfico proviene de múltiples fuentes a la vez.
                </p>
                <p className="py-2">
Además, los ciberdelincuentes ahora usan dispositivos de Internet de las cosas (IoT) para aumentar el peligro de sus botnets, al reducir los procesos manuales. Es decir, pueden usar dispositivos IoT para que sea mucho más fácil sincronizar sus dispositivos botnet, lo cual aumenta la efectividad de sus ataques.
                </p>
                </div>
                </div>
    )
}

export default AtaqueDoS;