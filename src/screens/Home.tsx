import { Helmet } from "react-helmet";
import { About, Contacts, Footer, Hero, Projects, Skills } from "../components";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Helmet>
        <title>Javi Portfolio - home</title>
      </Helmet>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
