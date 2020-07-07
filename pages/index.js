import Head from "next/head";
import Layout from "../src/features/Layout";
import Presentation from "../src/features/Presentation";
import About from "../src/features/About";
import Footer from "../src/features/Footer";
import Header from "../src/components/Header";

const Home = () => {
  return (
    <>
      <Header title="Christian Gomez WEB" />
      <Layout>
        <Presentation />
        <About />
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
