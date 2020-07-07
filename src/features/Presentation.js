const Presentation = () => {
  return (
    <section className="sm:relative">
      <div className="sm:min-h-screen">
        <img
          className="w-full h-auto"
          src="/images/computer-img.jpg"
          alt="hero"
        />
      </div>
      <div className="py-5 sm:px-3 bg-gray-100 sm:w-5/12 sm:h-56 sm:absolute bottom-0 left-0 flex flex-col justify-around">
        <h1 className="text-gray-800 leading-7 sm:leading-8 font-bold text-3xl sm:text-4xl mb-3">
          Soy, Soy Christian Gómez y soy un entusiasta de la programación.
        </h1>
        <a
          className="bg-gray-800 inline-block self-start text-white active:bg-gray-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
          style={{ transition: "all .15s ease" }}
          href="#about"
        >
          <i className="fas fa-arrow-down"></i> Sobre mi
        </a>
      </div>
    </section>
  );
};

export default Presentation;
