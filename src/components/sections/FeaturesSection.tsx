import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Stat,
  StatLabel,
  StatNumber,
  Box,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";
import TwitterLogo from "../TwitterLogo";
import DiscordLogo from "../DiscordLogo";
import OpenseaLogo from "../OpenseaLogo";
import SectionNumber from "../SectionNumber";

interface FeatureProps {
  text?: string;
  iconBg?: string;
  url?: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg, url }: FeatureProps) => {
  return (
    <Stack
      direction={"row"}
      align={"start"}
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <Flex rounded={"full"}>{icon}</Flex>
    </Stack>
  );
};

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat px={{ base: 4, md: 8 }} py={"5"}>
      <StatLabel fontFamily="Satoshi-Black" fontSize="6xl" isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"sm"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function FeaturesSection() {
  return (
    <Flex
      py={{ base: 20, md: 28 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={{ base: 5, md: 28 }}
      textAlign={{ base: "center", md: "left" }}
      id="about"
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        <Stack
          flex={1}
          spacing={{ base: 5, md: 10 }}
          color={"#202A36"}
          fontFamily="ClashDisplay-SemiBold"
        >
          <Text color={"#202A36"} fontSize={"lg"}>
            About Us
          </Text>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            fontFamily="ClashDisplay-SemiBold"
            position="relative"
          >
            <svg
              style={{
                position: "absolute",
                top: "-30px",
                left: "-40px",
              }}
              width="275"
              height="142"
              viewBox="0 0 275 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M71.4 141.72C94.4584 141.72 112.247 134.651 124.266 122.142C136.273 109.644 142.32 91.9243 142.32 71H138.88C138.88 91.2757 133.027 108.056 121.784 119.758C110.553 131.449 93.7416 138.28 71.4 138.28V141.72ZM142.32 71C142.32 50.1739 136.272 32.4556 124.267 19.9344C112.25 7.40086 94.4619 0.279634 71.4 0.279634V3.72036C93.7381 3.72036 110.55 10.5991 121.783 22.3156C133.028 34.0444 138.88 50.8261 138.88 71H142.32ZM71.4 0.279634C48.2402 0.279634 30.402 7.39956 18.3595 19.9331C6.32838 32.4547 0.279636 50.1739 0.279636 71H3.72037C3.72037 50.8261 9.57162 34.0453 20.8405 22.3169C32.098 10.6004 48.9598 3.72036 71.4 3.72036V0.279634ZM0.279636 71C0.279636 91.9243 6.32745 109.645 18.3607 122.143C30.4048 134.653 48.2437 141.72 71.4 141.72V138.28C48.9563 138.28 32.0952 131.447 20.8393 119.757C9.57256 108.055 3.72037 91.2757 3.72037 71H0.279636ZM71.4 101.68C59.9772 101.68 53.4178 99.765 49.5697 95.3671C45.6556 90.8938 44.1204 83.4002 44.1204 71H40.6796C40.6796 83.3998 42.1444 92.1062 46.9803 97.6329C51.8822 103.235 59.8228 105.12 71.4 105.12V101.68ZM44.1204 71C44.1204 58.5998 45.6556 51.1062 49.5697 46.6329C53.4178 42.235 59.9772 40.3204 71.4 40.3204V36.8796C59.8228 36.8796 51.8822 38.765 46.9803 44.3671C42.1444 49.8938 40.6796 58.6002 40.6796 71H44.1204ZM71.4 40.3204C82.7193 40.3204 89.228 42.2337 93.0521 46.6292C96.9448 51.1036 98.4796 58.6004 98.4796 71H101.92C101.92 58.5996 100.455 49.8964 95.6479 44.3708C90.772 38.7663 82.8807 36.8796 71.4 36.8796V40.3204ZM98.4796 71C98.4796 83.3996 96.9448 90.8964 93.0521 95.3708C89.228 99.7663 82.7193 101.68 71.4 101.68V105.12C82.8807 105.12 90.772 103.234 95.6479 97.6292C100.455 92.1036 101.92 83.4004 101.92 71H98.4796ZM272.28 138V139.72H274V138H272.28ZM272.28 104.2H274V102.48H272.28V104.2ZM224.48 104.2V102.48H224.375L224.271 102.492L224.48 104.2ZM186.88 108.8H185.159V110.744L187.089 110.508L186.88 108.8ZM201.88 98.4L201.468 96.7297L201.462 96.731L201.88 98.4ZM231.88 91L232.292 92.6703L232.297 92.669L231.88 91ZM147.88 56.6H146.159V58.3204H147.88V56.6ZM184.68 56.6V58.3204H186.4V56.6H184.68ZM223.08 59L223.602 60.6392L223.612 60.6358L223.08 59ZM186.68 70.6L186.157 68.9609L186.156 68.9612L186.68 70.6ZM147.28 138H145.559V139.72H147.28V138ZM274 138V104.2H270.559V138H274ZM272.28 102.48H224.48V105.92H272.28V102.48ZM224.271 102.492L186.671 107.092L187.089 110.508L224.689 105.908L224.271 102.492ZM188.6 108.8C188.6 107.375 188.92 106.346 189.435 105.544C189.957 104.728 190.76 104.022 191.916 103.378C194.318 102.041 197.794 101.195 202.297 100.069L201.462 96.731C197.165 97.8053 193.141 98.7588 190.243 100.372C188.75 101.203 187.452 102.26 186.537 103.688C185.614 105.129 185.159 106.825 185.159 108.8H188.6ZM202.292 100.07L232.292 92.6703L231.468 89.3297L201.468 96.7297L202.292 100.07ZM232.297 92.669C244.43 89.6357 254.958 85.0888 262.466 77.9464C270.034 70.7461 274.4 61.0327 274.4 48H270.959C270.959 60.1673 266.926 68.9539 260.094 75.4536C253.201 82.0112 243.329 86.3643 231.462 89.331L232.297 92.669ZM274.4 48C274.4 33.9364 270.074 21.8976 260.094 13.4142C250.162 4.97247 234.896 0.279634 213.48 0.279634V3.72036C234.464 3.72036 248.797 8.32753 257.866 16.0358C266.885 23.7024 270.959 34.6636 270.959 48H274.4ZM213.48 0.279634C189.592 0.279634 172.73 6.50713 161.824 16.4008C150.904 26.3062 146.159 39.7019 146.159 53.6H149.6C149.6 40.4981 154.055 28.0937 164.136 18.9492C174.229 9.79286 190.168 3.72036 213.48 3.72036V0.279634ZM146.159 53.6V56.6H149.6V53.6H146.159ZM147.88 58.3204H184.68V54.8796H147.88V58.3204ZM186.4 56.6V54H182.959V56.6H186.4ZM186.4 54C186.4 48.1004 187.609 44.3592 190.987 41.9197C194.556 39.3418 200.907 37.9204 212.08 37.9204V34.4796C200.852 34.4796 193.503 35.8582 188.972 39.1303C184.25 42.5408 182.959 47.6996 182.959 54H186.4ZM212.08 37.9204C222.272 37.9204 227.582 39.0417 230.334 40.7191C231.636 41.5125 232.347 42.4211 232.763 43.4352C233.201 44.4987 233.359 45.7866 233.359 47.4H236.8C236.8 45.6134 236.634 43.8013 235.946 42.1273C235.238 40.4039 234.023 38.9375 232.125 37.7809C228.478 35.5583 222.288 34.4796 212.08 34.4796V37.9204ZM233.359 47.4C233.359 50.1253 232.639 51.8263 231.138 53.2102C229.51 54.7117 226.828 55.9703 222.547 57.3642L223.612 60.6358C227.931 59.2297 231.249 57.7883 233.471 55.7398C235.82 53.5737 236.8 50.8747 236.8 47.4H233.359ZM222.557 57.3609L186.157 68.9609L187.202 72.2391L223.602 60.6391L222.557 57.3609ZM186.156 68.9612C171.655 73.5936 161.456 78.9603 154.9 86.2496C148.286 93.6054 145.559 102.714 145.559 114.4H149C149 103.286 151.574 95.0946 157.459 88.5504C163.404 81.9397 172.905 76.8064 187.203 72.2388L186.156 68.9612ZM145.559 114.4V138H149V114.4H145.559ZM147.28 139.72H272.28V136.28H147.28V139.72Z"
                fill="#202A36"
                fill-opacity="0.1"
              />
            </svg>

            <Text
              as={"span"}
              position={"relative"}
              textTransform="capitalize"
              fontSize="3rem"
            >
              Ride your pure arabian camels in the sahara
            </Text>
          </Heading>

          <Stack
            direction="row"
            mr="16"
            mt="8"
            pt="8"
            borderTop="0.5px solid #ccc"
          >
            <Feature
              url="https://twitter.com/ProCamelRiders"
              icon={<TwitterLogo />}
            />
            <Feature
              url="https://discord.gg/ZTPc8rNvQu"
              icon={<DiscordLogo />}
            />
            <Feature
              url="https://opensea.io/ProCamelRiders"
              icon={<OpenseaLogo />}
            />
          </Stack>
          <SectionNumber number={2} />
        </Stack>
        <Flex>
          <Stack
            spacing={6}
            fontFamily="Satoshi-Regular"
            p={{ base: 8, md: 8 }}
          >
            <Heading fontFamily="Satoshi-Medium" fontSize="1.2rem">
              Pro Camel Riders is inspired by the beauty of the Arab world.
            </Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Our goal is to promote the crypto and NFT world in the Arab
              region. The Arab region is often left behind in a lot of
              industries but we are here to change that. With a progressive and
              clear roadmap, we ensure the future of the project.
            </Text>
            <Text color={"gray.500"} fontSize={"lg"}>
              We are a team of 3 members with over 9 years of experience in the
              crypto world.
            </Text>

            <Stack direction="row">
              <StatCard title={"100+"} stat="Hand drawn assets" />
              <StatCard title={"4+"} stat="Milestones" />
            </Stack>
          </Stack>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
