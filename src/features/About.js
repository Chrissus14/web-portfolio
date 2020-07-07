import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className=" py-3 sm:flex sm:justify-between sm:items-center sm:mt-4"
    >
      <div className="sm:w-6/12 sm:py-16 sm:pr-16 w-5/6 mb-4">
        <img
          className="object-cover object-center rounded h-auto w-full"
          src="/images/profile-picture.jpg"
          alt="foto de perfil"
        />
      </div>
      <div className="h-full sm:w-6/12 sm:px-5 sm:py-5">
        <hr className="border" />
        <h2 className="my-4 text-4xl title-font text-gray-900">Sobre mi</h2>
        <p className="text-base body-font leading-relaxed mt-0 mb-4 text-gray-800">
          Soy un junior <strong>full-stack</strong> developer en busqueda de
          empleo en una excelente empresa, en la pueda aportar mis habilidades y
          conocimientos. Me enfoco en escribir un HTML semantico, uso CSS
          moderno y me concentro escribir codigo "limpio" ya que para mi el
          orden del codigo es muy importante, trabajo con <strong>React</strong>{" "}
          y <strong>Next.js</strong>, pero puedo adaptarme a cualquier
          herramienta que se requiera. Vivo en el estado de Veracruz, México, me
          gustaría trabajar de manera remota, pero si es necesario cambiar de
          lugar de residencia estoy dispuesto a hacerlo. Cuando no estoy
          codeando, mis pasatiempos son, ir al gimnacio, meditar y videojuegos.
          Estaría encantado que vieras mi trabajo.
        </p>
        <div className="mb-6">
          <Link href="/portafolio">
            <a
              className="text-indigo-500 bg-transparent border border-solid border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none"
              style={{ transition: "all .15s ease" }}
            >
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
