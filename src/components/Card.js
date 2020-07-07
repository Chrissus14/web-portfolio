const Card = ({ image, title, description, link, tools }) => {
  const usedTools = tools.map((tool, index) => (
    <span
      key={index}
      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
    >
      {tool}
    </span>
  ));
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg sm:m-2 mb-3">
      <img className="w-full" src={image} alt="Sunset in the mountains" />
      <div className="px-6 py-3">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <a
          className=" inline-block text-gray-500 bg-transparent border border-solid border-gray-500 hover:bg-gray-500 hover:text-white active:bg-gray-600 font-bold uppercase text-sm px-5 py-2 rounded outline-none focus:outline-none"
          href={link}
          target="_blanc"
        >
          Visita el sitio
        </a>
      </div>
      <div className="px-6 py-3">{usedTools}</div>
    </div>
  );
};

export default Card;
