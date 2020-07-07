import Head from "next/head";
import Layout from "../src/features/Layout";
import Presentation from "../src/features/Presentation";
import About from "../src/features/About";
import Navbar from "../src/features/Navbar";
import Footer from "../src/features/Footer";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";

const Home = () => {
  return (
    <>
      <Header title="Christian Gomez WEB" />
      <Navbar />
      <Layout>
        <Hero />
        <About />
      </Layout>
      <Footer />
    </>
  );
};

export default Home;
