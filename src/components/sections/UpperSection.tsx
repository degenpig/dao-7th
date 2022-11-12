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

import large from '../../images/homeimage.png';
import medium from '../../images/homeimage2.png';
import small from '../../images/homeimage3.png';
import OriLogo from '../../images/original_logo.png';

import FeaturesBg from '../../images/nftsymbol.png';

import AvatarTwitter from '../../images/social1.png';
import AvatarDiscord from '../../images/social2.png';
import AvatarOpensea from '../../images/social3.png';
import AvatarInstagram from '../../images/social4.png';

import '../../css/mystyle.css';



import Menuimage from '../../images/menuimg.png';

function myFunction() {
  var x = document.getElementById("navbar2");
  if (x.className === "mytopnav") {
    x.className += "responsive";
  } else {
    x.className = "mytopnav";
  }
}

export default function UpperSection() {
  return (
    <>
        <section id="headerback" className="relative">
        
        <div id="unique_total" className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div id="headerdiv">
          <div id = "menudiv">
            <img src={Menuimage} width={'50px'} onClick={myFunction}></img>
          </div>
          <div id="sociallinks">
            <a className="icon" id="avatar_twitter" href="#0"  >
              <img width='40px' height='100px' src={AvatarTwitter} alt="logo"/>
            </a>
            <a className="icon" id="avatar_discord" href="#0"  >
              <img width='40px' height='100px' src={AvatarDiscord} alt="logo"/>
            </a>
            <a className="icon" id="avatar_opensea" href="#0"  >
              <img width='40px' height='100px' src={AvatarOpensea} alt="logo"/>
            </a>
            <a className="icon" id="avatar_instagram" href="#0"  >
              <img width='40px' height='100px' src={AvatarInstagram} alt="logo"/>
            </a>
          </div>
          <div id = "navbar" className="mytopnav">
            <div className="header_menu header_menu1">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#intro">What is NFT</a></li>
                <li><a href="#benefits">Benefits & Utilities</a></li>
              </ul>
            </div>
            <div className="header_logo">         
              <a href="index.html" className="heder_logo">
                <img src={OriLogo} alt="logo"/>
              </a>
            </div>
            <div className="header_menu header_menu2">
              <ul>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#team">Founder & Broker</a></li>
                <li><a href="#faq">Members</a></li>
              </ul>
            </div>
          </div>
          
          </div>
          <div id = "navbar2" className="mytopnav">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#intro">What is NFT</a></li>
                <li><a href="#benefits">Benefits & Utilities</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#team">Founder & Broker</a></li>
                <li><a href="#faq">Members</a></li>
              </ul>
          </div>
          <div className="max-w-6xl mx-auto text-center pb-12 md:pb-16">
            <p id="newheader_1" >READY TO TAKE OVER THE REAL ESTATE BUSINESS AND NFT SPACE</p>
            <h1 id="newheader_2" className="h6 mb-4" >JOIN Unique By Design Realty 3.0</h1>
            <h1 id="newheader_3" className="h6 mb-4" >and become a “Unique” Agent</h1>
            <p id="newheader_4" >On our 3rd year anniversary in the real estate business, we are commemorating by using 3rd web technology</p>
          </div>
          <div id="unique_flex" className="md:grid md:grid-cols-12 md:gap-6">
                  <div id="ghi_small">
                    <img src={small}  />
                  </div>
                  <div id="ghi_medium">
                    <img src={medium}  />
                  </div>
                  <div id="ghi_large">
                    <img src={large}  />
                  </div>
          </div >
        </div >
      </section >

      <section className="relative">
      <div id="features_margin" className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="mx-auto text-center pb-12 md:pb-16">
            <h1 id="features_title" className="h6 mb-4" >The Blockchain</h1>
            <p id="features_text1" className="text-xl text-gray-600">It is like a club. Your NFT membership is your ticket into the world first NFT “Operated” Real Estate Brokerage. Unlike any Real Estate Brokerage at any time in history you as the Real Estate agent have a VOICE and the “power of the purse.” Your membership is exclusive as there will only be 100 NFT’s and thus only 100 NFT’s available for member Real Estate agents.</p>
          </div>
          <div id="features_flex" className="md:grid md:grid-cols-12 md:gap-6">
            <img className="md:max-w-none mx-auto rounded" src={FeaturesBg}  width="350" height="302" alt="Features bg" />
            <div id="features_margin2" className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
              <h3 className="h6 mb-3" style={{fontSize:'30px'}}>So, what is an NFT?</h3>
              <p>NFTs are tokens that we can use to represent ownership of unique items. They let us tokenize things like art, videos, even real estate. They can only have one official owner at a time, and they are secured by the Ethereum blockchain – no one can modify the record of ownership or copy/paste a new NFT into existence. So, in short an NFT stands for NON-FUNGIBLE TOKEN. It is a one-of-a-kind, digital asset. So when you own a particular NFT. You own an asset that is yours and only yours until you decide to sell it or gift it. Much like owning a house. Your house is your house. It is uniquely yours because of how it is painted and furnished, the landscaping, the fact that it is a craftsmen's home that is 1 acre on your street.</p>
              <p>It would be impossible for someone to own a house that is 100% the same with all things being considered. As you can see there are trillions of variations. So again, your house is unique like an NFT you own would be unique to you. Thus, creating scarcity and value. The blockchain verifies ownership like a deed verifies homeownership but in a much more efficient and instant way.</p>
            </div>
          </div >
        </div >
      </div >
    </section >


      
    </>
  );
}
