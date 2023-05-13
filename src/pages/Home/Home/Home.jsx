import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactBanner from "../Banner/ContactBanner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <ContactBanner></ContactBanner>
    </div>
  );
};

export default Home;
