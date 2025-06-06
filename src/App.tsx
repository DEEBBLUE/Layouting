import Header from "./components/Header/Header";

import HeroSection from "./section/HeroSection/HeroSection";
import AboutSection from "./section/AboutSection/AboutSection";
import PerspectivesSection from "./section/PerspectivesSection/PerspectivesSection.tsx";

import "./App.scss"


function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <HeroSection/>
        <AboutSection/>
        <PerspectivesSection/>
      </main>
    </>
  )
}

export default App
