import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className=" py-3 sm:flex sm:justify-center sm:items-start sm:mt-4"
    >
      <div className="my-5">
        <img
          className="w-full h-auto"
          src="/images/profile-picture.jpg"
          alt="foto de perfil"
        />
      </div>
      <div className="h-full sm:px-5 sm:py-5">
        <hr className="border" />
        <h2 className="my-4 text-4xl font-bold text-gray-800">Sobre mi</h2>
        <p className="text-base font-light leading-relaxed mt-0 mb-4 text-gray-800">
          Soy un junior front-end developer en busqueda de empleo en una
          excelente empresa. La cual me permita aportar mis habilidades y
          conocimientos. Me enfoco en escribir un HTML semantico, uso CSS
          moderno y trato de escribir codigo lo más "limpio posible", trabajo
          con React, pero puedo adaptarme a cualquier herramienta que se
          requiera. Vivo en el estado de Veracruz, México, me gustaría trabajar
          de manera remota, pero si es necesario cambiar de lugar de residencia
          estoy dispuesto a hacerlo. Cuando no estoy codeando, mis pasatiempos
          son, ir al gimnacio, meditar y videojuegos. Estaría encantado que
          vieras mi trabajo.
        </p>
        <div className="mb-6">
          <Link href="/portafolio">
            <a className="text-gray-500 bg-transparent border border-solid border-gray-500 hover:bg-gray-500 hover:text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none inline-block">
              Ir a portafolio
            </a>
          </Link>
        </div>
        <hr className="border-t-4 py-5" />
      </div>
    </section>
  );
};

export default About;
