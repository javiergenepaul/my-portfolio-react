import { About, Contacts, Footer, Hero, Projects, Skills } from "../components";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
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
