import { Link } from "react-router-dom";
import Header from "../template/header";
import image from "../../assets/img/security-education.jpeg"
import image1 from "../../assets/img/security-vulneravility.jpg"

function Educacion() {
    return (
        <div className=" bg-gray-700 h-full min-h-screen text-white">
            <Header />
            <div className="px-10 bg-gray-800 p-2 flex shadow-lg space-x-4 ">
                <Link to={"/"}>Inicio </Link>
                <p>&gt;</p>
                <Link to={"/educacion"}>Educacion y concientizacion</Link>
            </div>
            <div className="container px-10 py-5  text-justify text-lg">
                <h1 className="text-center text-5xl pb-5">Educacion y concientizacion</h1>

                <img className="float-left md:w-2/5 p-5 " src={image1} alt="" />
                <p className="py-2">
                    Los ciberataques son un peligro real para las empresas y organizaciones que no toman medidas adecuadas para proteger sus sistemas y datos. La educación y la concienciación en ciberseguridad son fundamentales para reducir el riesgo de sufrir estos ataques.
                </p>
                <p className="py-2 ">
                    La formación es esencial para que los trabajadores de una empresa tengan conocimientos básicos de ciberseguridad. Los cursos de formación pueden enseñar a los empleados cómo identificar un ciberataque y qué medidas tomar para evitarlo. Por ejemplo, pueden aprender a identificar correos electrónicos phishing o identificar códigos maliciosos como ransomware.
                </p>
                <br />
                <h2 className="text-3xl font-medium mt-10 ">
                    Consejos de ciberseguridad para empleados y directivos de empresas
                </h2>
                <p className="py-2">

                    Existen muchos consejos para mejorar la ciberseguridad de las empresas. A continuación, se mencionan algunos:
                    <li>Mantener siempre actualizado el software y sistemas utilizados</li>
                    <li>Utilizar contraseñas fuertes y cambiarlas regularmente</li>
                    <li>Evitar descargar archivos de fuentes desconocidas</li>
                    <li> No compartir contraseñas ni información confidencial</li>
                    <li>Usar autenticación de dos factores</li>


                </p>
                <h2 className="text-3xl my-5 font-medium">
                    Beneficios de una cultura de ciberseguridad en la empresa
                </h2>
                <img className="float-end md:w-2/5 p-5 " src={image} alt="" />
                <p className="py-2">
                    Una cultura de ciberseguridad en la empresa permite a los trabajadores ser conscientes del riesgo de los ciberataques y adoptar prácticas seguras.
                </p>
                <p className="py-2">
                    Es importante entender que la protección es responsabilidad de todos los trabajadores y no solo del departamento de tecnología. Cuando todos los miembros de la empresa se sienten responsables de la protección contra los ciberataques, la seguridad mejora y se reducen los riesgos.

                </p>
                <p className="py-2">
                Finalmente, la educación y la concienciación de los trabajadores son una parte importante de la ciberseguridad de la empresa. La formación y la implementación de políticas seguras en la empresa fortalecen las defensas para minimizar los riesgos de ciberataques.
                </p>
                <p>
                </p>
            </div>

        </div>
    )
}

export default Educacion;