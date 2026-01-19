import { BackgroundImg } from "./home-page/hero-section/BackgroundImg";
import SubHero from "./home-page/sub-hero-section/SubHero";
import Navbar from "./home-page/navigation-section/Navbar";
import HomeFooter from "./home-page/footer/HomeFooter";
import Ui from "./home-page/find-tiffin/ServicesContainer";
import Mid from "./home-page/footer/FooterTrust";
function App() {
  return (
    <>
      <Navbar />
      <BackgroundImg />
      <SubHero />
      <HomeFooter />
      <Ui />
      <Mid />
    </>
  );
}

export default App;
