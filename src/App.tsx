import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";

import "./App.css";
import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import FooterSection from "./components/sections/FooterSection";
import RoadmapSection from "./components/sections/RoadmapSection";
import TeamSection from "./components/sections/TeamSection";
import MintSection from "./components/sections/MintSection";
import Header from "./components/Header";
import Layout from "./components/Layout";

import UpperSection from "./components/sections/UpperSection";
import LowerSection from "./components/sections/LowerSection";

/* BG */

// position: absolute;
// width: 1440px;
// height: 1024px;
// left: 0px;
// top: 0px;

// /* Rectangle 1 */

// position: absolute;
// width: 1440px;
// height: 1024px;
// left: 0px;
// top: 0px;

// background: radial-gradient(41.49% 58.35% at 5.17% 100%, rgba(255, 255, 255, 0.25) 0%, rgba(109, 109, 109, 0) 100%), radial-gradient(58.75% 82.62% at 100% 185.69%, #FFFFFF 0%, rgba(109, 109, 109, 0) 100%), radial-gradient(41.49% 58.35% at 5.17% 100%, #FFFFFF 0%, rgba(109, 109, 109, 0) 100%), radial-gradient(100% 100% at 50% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(52.43% 73.73% at 68.26% -6.4%, rgba(120, 31, 233, 0.25) 0%, rgba(0, 133, 255, 0) 100%), #141725;
// background-blend-mode: soft-light, overlay, overlay, overlay, normal, normal;

// /* Rectangle 2 */

// position: absolute;
// width: 1440px;
// height: 1024px;
// left: 0px;
// top: 0px;

// background: hsla(229.41176470588238, 29.824561403508774%, 11.176470588235295%, 0.05);
// backdrop-filter: blur(350px);
// /* Note: backdrop-filter has minimal browser support */

// /* Rectangle 3 */

// position: absolute;
// width: 1440px;
// height: 1024px;
// left: 0px;
// top: 0px;

// background: url(1k_Dissolve_Noise_Texture.png);

// background: hsla(229.41176470588238, 29.824561403508774%, 11.176470588235295%, 0.05);
function App() {
  return (
    <Layout>
      <UpperSection/>
      {/* <HeroSection />
      <FeaturesSection /> */}
      <RoadmapSection />
      {/* <TeamSection />
      <FooterSection /> */}
      <LowerSection />
    </Layout>
  );
}

export default App;
