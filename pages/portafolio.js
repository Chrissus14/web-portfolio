import React from "react";
import Card from "../src/components/Card";
import Layout from "../src/features/Layout";
import Footer from "../src/features/Footer";
import Header from "../src/components/Header";
import data from "../src/data";

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
      <Layout>
        <section className="sm:flex sm:justify-start sm:flex-wrap">
          {cards}
        </section>
      </Layout>
      <Footer />
    </>
  );
};

export default Portafolio;
