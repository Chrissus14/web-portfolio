const Hero = () => (
  <section className="text-gray-700 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Hola, soy Christian de J. Gómez Murillo,
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed">
          Soy desarrollador web <strong>Fullstack</strong> con{" "}
          <strong>JavaScript</strong>, trabajo con herramientas como React,
          Next.js y Node.js, te invito a conocer más sobre mi.
        </p>
        <div className="flex justify-center">
          <a
            className="bg-indigo-500 inline-block self-start text-white active:bg-gray-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
            style={{ transition: "all .15s ease" }}
            href="#about"
          >
            <i className="fas fa-arrow-down mr-2"></i> Sobre mi
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="computer image"
          src="/images/computer-img.jpg"
        />
      </div>
    </div>
  </section>
);

export default Hero;
