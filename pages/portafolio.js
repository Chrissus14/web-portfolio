import React from "react";
import Card from "../src/components/Card";
import Layout from "../src/features/Layout";
import Footer from "../src/features/Footer";
import Head from "next/head";

const data = [
  {
    id: 1,
    image: "/images/portafolio.PNG",
    title: "Mi portafolio",
    description:
      "Mi web para mostrar mis practicas que he realizado por mi cuenta, esta en ka versión 1, y es este mismo proyecto",
    link: "/",
    tools: ["React", "Next.js", "Tailwind css"],
  },
  {
    id: 2,
    image: "/images/todo-list-project.PNG",
    title: "TodoList App",
    description:
      "Lista de tareas en la que puedes crear, completar, eliminar una o varias tareas",
    link: "https://myowntodolist.netlify.app/",
    tools: ["React", "Styled components", "Local storage"],
  },
  {
    id: 3,
    image: "/images/landing-page.PNG",
    title: "Fylo landing page",
    description: "Landing page challenge de frontendmentor.io",
    link: "https://fylo-landing-page-two-roan.now.sh/",
    tools: ["HTML", "CSS"],
  },
  {
    id: 4,
    image: "/images/single-section.PNG",
    title: "Sección de introducción",
    description: "Single introductory challenge de frontendmentor.io",
    link: "https://single-introductory-section.now.sh/",
    tools: ["HTML", "CSS"],
  },
  {
    id: 5,
    image: "/images/hudle-landing.PNG",
    title: "Hudle Landing Page",
    description: "Landing page challenge de frontendmentor.io",
    link: "https://huddle-landing-page-alternating.now.sh/",
    tools: ["HTML", "CSS"],
  },
];

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
      <Head>
        <title>Portafolio</title>
      </Head>
      <Layout>
        <section className="mx-auto sm:flex sm:justify-center sm:flex-wrap">
          {cards}
        </section>
      </Layout>
      <Footer />
    </>
  );
};

export default Portafolio;
