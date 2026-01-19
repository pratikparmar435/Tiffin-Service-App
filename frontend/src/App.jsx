import { BackgroundImg } from "./home-page/hero-section/BackgroundImg";
import SubHero from "./home-page/sub-hero-section/SubHero";
import Navbar from "./home-page/navigation-section/Navbar";
import Ui from "./home-page/find-tiffin/ServicesContainer";
import Mid from "./home-page/footer/FooterTrust";
function App() {
  return (
    <>

      <Navbar />
      <BackgroundImg />
      <SubHero />
      <Ui></Ui>
      <Mid></Mid>
    </>
  );
}

export default App;
