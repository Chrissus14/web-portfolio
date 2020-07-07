import React from "react";
import Card from "../src/components/Card";
import Layout from "../src/features/Layout";
import Footer from "../src/features/Footer";
import Header from "../src/components/Header";
import data from "../src/data";
import Navbar from "../src/features/Navbar";

const Portafolio = () => {
  const cards = data.map((card) => (
    <Card
      key={card.id}
      image={card.image}
      title={card.title}
      description={card.description}
      link={card.link}
      tools={card.tools}
    />
  ));
  return (
    <>
      <Header title="Portafolio" />
      <Navbar />
      <Layout>
        <section className="sm:flex sm:justify-start sm:flex-wrap my-10">
          {cards}
        </section>
      </Layout>
      <Footer />
    </>
  );
};

export default Portafolio;
