import BackgroundImg from "./hero-section/BackgroundImg";
import SubHero from "./sub-hero-section/SubHero";
import Navbar from "./navigation-section/Navbar";
import HomeFooter from "./footer/HomeFooter";
import ServicesContainer from "./find-tiffin/ServicesContainer";
import FooterTrust from "./footer/FooterTrust";
import Subscription from "./find-tiffin/Subscription";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <BackgroundImg />
      <SubHero />
      <ServicesContainer />
      <Subscription />
      <FooterTrust />
      <HomeFooter />
    </>
  );
};

export default HomePage;
