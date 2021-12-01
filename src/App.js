import Header from "./components/header/Header";
import BackGround from "./components/BackGround/BackGround";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import FourSection from "./components/FourSection/FourSection";
import FiveSection from "./components/FiveSection/FiveSection";

//

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BackGround />
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <FiveSection />
    </div>
  );
}

export default App;
