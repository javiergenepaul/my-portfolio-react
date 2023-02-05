import { Helmet } from "react-helmet";
import { About, Contacts, Footer, Hero, Projects, Skills } from "../components";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Helmet>
        <title>Javi Portfolio - home</title>
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <Hero />  
      </div>
    </>
  );
};

export default Home;
