import { ReactNode } from "react";
import {
  Box,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Link as MenuLink } from "react-scroll";


import '../../css/mystyle.css';


import large  from '../../images/benefitsNFT.png';
import medium  from '../../images/benefitsNFT2.png';
import small  from '../../images/benefitsNFT3.png';

import FeaturesBg from '../../images/111.png';

import FeaturesBg2 from '../../images/222.png';

import FeaturesBg3 from '../../images/unique.png';

import large2 from '../../images/roadmapimage.png';
import medium2 from '../../images/roadmapimage2.png';
import small2 from '../../images/roadmapimage3.png';

import FeaturesBg4 from '../../images/CEO_section_image.png';

import FeaturesBg5 from '../../images/3.gif';

import AvatarTwitter from '../../images/social1.png';
import AvatarDiscord from '../../images/social2.png';
import AvatarOpensea from '../../images/social3.png';
import AvatarInstagram from '../../images/social4.png';

import OriLogo from '../../images/original_logo.png';

export default function LowerSection() {
  return (
    <>
        <section className="relative" /*style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',height: '100%'}}*/>
      <div id="benefitsutilities_total" className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center pb-12 md:pb-16">
            <h1 id="benefitsutilities_title" className="h6 mb-4" >General Benefits & Utilities of the NFT</h1>
            <p id="benefitsutilities_content" className="text-xl text-gray-600">NFT technology helps us with regular company processes.</p>
          </div>
          <div id="def_small">
            <img src={small}  />
          </div>
          <div id="def_medium">
            <img src={medium}  />
          </div>
          <div id="def_large">
            <img src={large}  />
          </div>
      </div >
    </section >

    <section className="relative">
      <div id="benefitsagent_total" >
        <div >
          <h1 id="benefitsagent_title">General Benefits of Becoming an Agent</h1>
          <p id="benefitsagent_subtitle"  >The goal is to invest back in the agents that make up the business.</p>
        </div>
        <div id="benefitsagent_flex" >
          <div id="benefitsagent_content" >
            <p >  • Mentorship and Training directly from the Broker. </p>
            <p >  • “Unique” Training Guide and Weekly videos. </p>
            <p >  • Guaranteed closings through Brokerage model program. </p>
            <p >  • Access to company funds. </p>
            <p >  • Become a part of history. Can change life in change of company history</p>
          </div>
          <img  src={FeaturesBg} width="500" height="602" alt="Features bg" />
        </div >
      </div >
    </section >

    <section className="relative">
      <div id="brandmission_total" >
          <div >
            <h1 id="brandmission_title">Brand Mission</h1>
            <p id="brandmission_subtitle" >Here we behold brand mission</p>
          </div>
          <div id="brandmission_flex" >
                <p id="brandmission_content" >Our “common-ity” goal is to educate and help as many people as possible take part in homeownership. We are also about empowerment of each other as real estate professionals by allowing everyone's voice to be heard and talents be utilized in a decentralized manner. Our vision is to change the entire landscape of the real estate industry by using a bottom-up approach to the brokerage model using blockchain technology. Here at our firm like none other. From a rookie agent to the CEO the power to make change is the same. </p>
                <img  src={FeaturesBg2} width="500" height="602" alt="Features bg" />
          </div >
      </div >
    </section >

    <section className="relative">
      <div id="unique_total" className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center pb-12 md:pb-16">
            <h1 id="unique_title" className="h6 mb-4" >What makes Unique By Design Realty “Unique”</h1>
             <p id="unique_subtitle" className="text-xl text-gray-600">Unique things are based on something “Unique”.</p>
          </div>
          <div id="unique_flex" className="md:grid md:grid-cols-12 md:gap-6">
                <p id="unique_content">First off unlike most firms we do not believe in the “stiff” way of doing business. Quite literally. We are flexible with every interaction because we believe we can help 99.9% of people in their real estate endeavors through our programs and systems. There is a single mom out there that has been saving every Dime she can to buy a home but does not know how to start. On the other hand, a married couple has been through rough times financially because her husband lost his job a couple of years back and they have had to max out their credit cards just to survive and damaged credit in the process. There is also young man that has been working as a Hvac tech for a couple of years out of school and instead “yolo-ying” everything he makes on video games and coffee. He has been responsibly building credit and saving money to start building wealth through homeownership. Or an executive that just got promoted at a local corporation that wants to sell her home and buy a more fitting home to match her salary. Regardless, these real-world people in these real-world examples. We just have the humility to hear them all out. That is what makes us “Unique</p>
                <img className="md:max-w-none mx-auto rounded" src={FeaturesBg3} width="450" height="502" alt="Features bg" />
          </div >
      </div >
    </section >

    <section className="relative" >
      <div id="roadmap_total" className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 id="roadmap_title"  className="h6 mb-4">The First 18-month Roadmap</h1>
            <p id="roadmap_subtitle"  className="text-xl text-gray-600">Roadmap consists 6 steps totally.</p>
          </div>
          <div id="abc_small">
            <img src={small2}  />
          </div>
          <div id="abc_medium">
            <img src={medium2}  />
          </div>
          <div id="abc_large">
            <img src={large2}  />
          </div>
      </div >
    </section >

    <section className="relative">
      <div id="founderbroker_total" className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <h1 id="founderbroker_title"  className="h6 mb-4" >Founder and Broker</h1>
            <p id="founderbroker_subtitle"  className="text-xl text-gray-600">O'Bryant began his real estate career in his early 20sas an investor in 2013. He later officially became a licensed agent in 2015after growing a passion for the importance of homeownership. Working as a solo agent and developer under a national brokerage, he quickly found success winning million-dollar producer awards year after year; it was apparent that the job was far from over. In 2019, O'Bryant founded Unique byDesign Realty. A new brokerage designed on the concept of creating more options for people to achieve homeownership in primarily nontraditional ways. At the same time, empowering others who want to follow a path of service and entrepreneurship as a "Unique Agent" under a new brokerage model that allows everyone to have a voice.</p>
            <img  src={FeaturesBg4} width="1200" height="702" alt="Features bg"  />
      </div >
    </section >

    <section className="relative">
      <div id="members_total" className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 id="members_title" className="h6 mb-4">Members</h1>
          <p id="members_subtitle" className="text-xl text-gray-600">The Principal Broker and CEO</p>
        </div>
        <div id="members_flex" className="md:grid md:grid-cols-12 md:gap-6">
          <p id="members_content"  className="text-xl text-gray-600"> </p>
          <img className="md:max-w-none mx-auto rounded" src={FeaturesBg5} width="500" height="462" alt="Features bg" />
        </div >
      </div >
    </section >

    <section id="footer" >
      <div id="footer_up">
        <div id="footer_up_left">
          <p className="footer_up_left_p">JOIN</p>
          <p className="footer_up_left_p">UNIQUE BY</p>
          <p className="footer_up_left_p">DESIGNE REALITY</p>
          <p id="footer_up_left_p2">Become a member of the strongest and fast growing NFTs community.</p>
          <div id="footer_up_left_buttons">
            <a id="footer_up_left_buttons_discord" href="#0"  > DISCORD</a>
            <a id="footer_up_left_buttons_opensea" href="#0"  > OPENSEA </a>
          </div>
        </div>
        <div id="footer_up_center">
          <img id="footer_up_center_img" width='150px' height='150px' src={OriLogo} alt="logo"/>
        </div>
        <div id="footer_up_right">
          <p id="footer_up_right_p_m" className="footer_up_right_p">MINT</p>
          <p className="footer_up_right_p">14TH FEBRUARY</p>
          <p id="footer_up_right_p2">Mint NFTs at 14th February</p>
          <div id="footer_up_right_buttons_buy">
            <a href="#0"  >BUY ON OPENSEA </a>
          </div>
        </div>
      </div>
      <div id="footer_down">
        <div id="footer_down_left">
                     <p>© 2022 UNIQUE BY DESIGNE REALITY. ALL RIGHTS RESERVED</p>
        </div>
        <div id="footer_down_center">
                      <a href="#0"  >
                        <img width='40px' height='100px' src={AvatarTwitter} alt="logo"/>
                      </a>
                      <a href="#0"  >
                        <img width='40px' height='100px' src={AvatarDiscord} alt="logo"/>
                      </a>
                      <a href="#0"  >
                        <img width='40px' height='100px' src={AvatarOpensea} alt="logo"/>
                      </a>
                      <a href="#0"  >
                        <img width='40px' height='100px' src={AvatarInstagram} alt="logo"/>
                      </a>
        </div>
        <div id="footer_down_right">
          <p>PRIVACY POLICY | TERM & CONDITION</p>
        </div>
      </div>
    </section >

    </>
  );
}
