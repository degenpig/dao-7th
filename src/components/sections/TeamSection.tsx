import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Stack,
  Text,
  useColorModeValue,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiArrowLeft, FiArrowRight, FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import SectionNumber from "../SectionNumber";
import hamood from "../../assets/hamood.jpg";
import moe from "../../assets/moe.png";
import abood from "../../assets/abood.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import React from "react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

// Import Swiper styles
interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

const team = [
  {
    name: "Hamood",
    image: hamood,
    title: "Developer",
    description:
      "Hamood has been in the crypto game since 2012 and has built many great projects!",
  },
  {
    name: "Abood",
    image: abood,
    title: "Artist",
    description:
      "Abood is an extraordinary artist that uses his art to portray the beauty of the Arab world",
  },
  {
    name: "Moe",
    image: moe,
    title: "Manager",
    description:
      "Moe loves Social Media. His greatest achievement is spending 7 hours a day on Tik Tok!",
  },
];
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      //   shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function TeamSection() {
  const previous = React.useRef(null);
  const next = React.useRef(null);

  return (
    <Box mx={"auto"} pt={5} px={{ base: 5, md: 28 }} py="4rem" id="team">
      <Stack fontFamily="ClashDisplay-SemiBold">
        <Text color={"#202A36"} fontSize={"lg"}>
          Farm Owners
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="start"
        >
          <chakra.h1
            textAlign={{ base: "center", md: "left" }}
            fontSize={"4xl"}
            py={10}
            fontWeight={"bold"}
          >
            The Camel Farm Owners
          </chakra.h1>

          <Text
            fontFamily="Satoshi-Regular"
            px={{ base: 12, md: 20 }}
            fontSize="21px"
          >
            Our Farm Owners live in the Sahara with over 9 years of crypto
            experience
          </Text>
        </Stack>
      </Stack>
      <SimpleGrid
        textAlign={{ base: "center", md: "left" }}
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 5, md: 8 }}
      >
        {team.map((member) => (
          <Box>
            <Box
              p={8}
              border="1.5px solid rgba(32, 42, 54, 0.15)"
              borderRadius="10px"
            >
              <Image src={member.image} />
            </Box>
            <Stack>
              <Text
                fontFamily="ClashDisplay-Regular"
                fontWeight="600"
                fontSize="18px"
              >
                {member.name}
              </Text>
              <Text
                fontFamily="Satoshi-Regular"
                fontSize="16px"
                fontWeight="500"
              >
                {member.title}
              </Text>
              <Text fontFamily="Satoshi-Regular" fontSize="16px">
                {member.description}
              </Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>

      <SectionNumber number={4} />
    </Box>
  );
}
