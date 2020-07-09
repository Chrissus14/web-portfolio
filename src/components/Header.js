import Head from "next/head";

const Header = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        integrity="sha512-xA6Hp6oezhjd6LiLZynuukm80f8BoZ3OpcEYaqKoCV3HKQDrYjDE1Gu8ocxgxoXmwmSzM4iqPvCsOkQNiu41GA=="
        crossOrigin="anonymous"
      />
      <link rel="icon" href="/computadora.svg" />
    </Head>
  );
};

export default Header;
