import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 font-sans">
      <div className=" h-20 hidden sm:flex justify-between items-center sm:max-w-screen-lg sm:mx-auto">
        <div>
          <Link href="/">
            <a className="text-white font-semibold mx-4">Inicio</a>
          </Link>
          <Link href="/portafolio">
            <a className="text-white font-semibold mx-4">Portafolio</a>
          </Link>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/christiandejesusgomezmurillo/"
            target="_blanc"
          >
            <i className="fab fa-linkedin text-white text-3xl mx-4"></i>
          </a>
          <a href="https://github.com/Chrissus14" target="_blanc">
            <i className="fab fa-github text-white text-3xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
