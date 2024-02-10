import { Link } from "react-router-dom";
import Header from "../template/header";
import image from "../../assets/img/42-SQL.jpg"

function AtaqueInySQL() {
    return (
        <div className="bg-gray-600 h-full min-h-screen text-white">
            <Header />
            <div className="px-10 bg-gray-800 p-2 flex shadow-lg space-x-4 ">
                <Link to={"/"}>Inicio </Link>
                <p>&gt;</p>
                <Link to={"/amenazas"}>Amenazas en la ciberseguridad</Link>
                <p>&gt;</p>

                <Link to={"/amenazas/inyecccion-sql"}>Inyeccion SQL</Link>
            </div>
            <div className="container px-10 py-5  text-justify text-lg">
                <h1 className=' text-5xl text-center font-semibold pb-5'>
                    Ataque de inyección SQL
                </h1>
                <p className="py-2">
                    Una inyección de SQL, a veces abreviada como SQLi, es un tipo de vulnerabilidad en la que un atacante usa un trozo de código SQL (lenguaje de consulta estructurado) para manipular una base de datos y acceder a información potencialmente valiosa. Es uno de los tipos de ataques más frecuentes y amenazadores, ya que puede atacar prácticamente cualquier sitio o aplicación web que use una base de datos basada en SQL
                </p>
                <h1 className="text-3xl font-medium pt-4">Impacto de los ataques de inyección de SQL</h1>
                <p className="py-2">
                    Un ataque de inyección de SQL exitoso puede tener consecuencias graves para una empresa. Esto se debe a que un ataque de inyección de SQL puede lograr lo siguiente:
                </p>
                <img className="md:w-1/2 float-start p-5 pb-7" src={image} alt="" />
                <ul className="py-2">
                    <li><b>Exponer datos sensibles.</b> Los atacantes pueden extraer datos, lo que pone en riesgo la exposición de datos sensibles almacenados en el servidor SQL. </li>
                    <li className="py-2">
                        <b>Comprometer la integridad de los datos.</b> Los atacantes pueden alterar o eliminar información del sistema.
                    </li>
                    <li className="py-2">
                        <b>Comprometer la privacidad de los usuarios.</b> En función de los datos almacenados en el servidor SQL, un ataque puede exponer información sensible del usuario, como direcciones, números de teléfono y detalles de tarjetas de crédito.
                    </li>
                    <li className="py-2">
                        <b>Otorgarle al atacante acceso de administrador al sistema.</b> Si un usuario de la base de datos tiene privilegios de administrador, un atacante puede acceder al sistema a través de un código malicioso.
                    </li>
                    <li className="py-2">
                        <b>Otorgarle a un atacante acceso general a su sistema.</b> Si usa comandos SQL débiles para verificar nombres de usuario y contraseñas, un atacante podría acceder a su sistema sin conocer las credenciales del usuario. De esta forma, el atacante puede causar problemas al acceder a información sensible y manipularla.
                    </li>
                    <li className="py-2">
                        <b>El costo de un ataque de inyección de SQL no es solo financiero:</b> también puede involucrar la pérdida de la confianza de los clientes y daños de reputación si se roba información personal, como nombres, direcciones, números de teléfono y detalles de tarjetas de crédito. Cuando se pierde la confianza del cliente, es difícil recuperarla.

                    </li>
                </ul>
                <p>




                    
                     
                </p>
            </div>
        </div>
    )
}


export default AtaqueInySQL