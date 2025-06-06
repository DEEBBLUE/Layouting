import Header from "./components/Header/Header";

import HeroSection from "./section/HeroSection/HeroSection";
import AboutSection from "./section/AboutSection/AboutSection";

import "./App.scss"


function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <HeroSection/>
        <AboutSection/>

        <section className="about">
        </section>
      </main>
    </>
  )
}

export default App
