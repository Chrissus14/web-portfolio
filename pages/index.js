import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Christian Gomez Portafolio</title>
      </Head>

      <div className="container mx-auto">
        <h1 className="text-lg text-center m-4">TailwindUI/Next.js</h1>
        <p className="bg-green-600">This is a test for tailwind integration</p>
      </div>
    </div>
  );
};

export default Home;
