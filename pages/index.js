import Head from "next/head";
import Layout from "../src/features/Layout";
import Presentation from "../src/features/Presentation";
import About from "../src/features/About";
import Footer from "../src/features/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Christian Gomez Portafolio</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
          integrity="sha512-xA6Hp6oezhjd6LiLZynuukm80f8BoZ3OpcEYaqKoCV3HKQDrYjDE1Gu8ocxgxoXmwmSzM4iqPvCsOkQNiu41GA=="
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <Layout>
        <Presentation />
        <About />
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
