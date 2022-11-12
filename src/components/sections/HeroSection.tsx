import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import gif from "../../assets/camels.gif";
import Header, { NavLink } from "../Header";
import SectionNumber from "../SectionNumber";

export default function HeroSection() {
  return (
    <Flex
      background="radial-gradient(41.49% 58.35% at 5.17% 100%, rgba(255, 255, 255, 0.25) 0%, rgba(109, 109, 109, 0) 100%), radial-gradient(58.75% 82.62% at 100% 185.69%, #FFFFFF 0%, rgba(109, 109, 109, 0) 100%), radial-gradient(41.49% 58.35% at 5.17% 100%, #FFFFFF 0%, rgba(109, 109, 109, 0) 100%), radial-gradient(100% 100% at 50% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(52.43% 73.73% at 68.26% -6.4%, rgba(120, 31, 233, 0.25) 0%, rgba(0, 133, 255, 0) 100%), #141725"
      backgroundBlendMode="soft-light, overlay, overlay, overlay, normal, normal"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      position="relative"
      width="100%"
      px={{ base: 5, md: 28 }}
      textAlign={{ base: "center", md: "left" }}
      flexDirection="column"
      id="home"
    >
      <Header />
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        // py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack
          flex={1}
          spacing={{ base: 5, md: 10 }}
          color={"white"}
          fontFamily="ClashDisplay-SemiBold"
        >
          <Stack>
            <SectionNumber number={1} />
            <Text>Introduction</Text>
          </Stack>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            fontFamily="ClashDisplay-SemiBold"
            position="relative"
          >
            <svg
              width="222"
              height="142"
              viewBox="0 0 222 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: "-30px",
                left: "-40px",
              }}
            >
              <path
                d="M71.4 140C116.8 140 140.6 112.2 140.6 71C140.6 30 116.8 2 71.4 2C25.8 2 2 30 2 71C2 112.2 25.8 140 71.4 140ZM71.4 103.4C48.4 103.4 42.4 95.8 42.4 71C42.4 46.2 48.4 38.6 71.4 38.6C94.2 38.6 100.2 46.2 100.2 71C100.2 95.8 94.2 103.4 71.4 103.4ZM220.08 138V4H185.08C177.68 17.6 166.28 20.6 151.68 20.6H146.68V46H182.48V138H220.08Z"
                fill="url(#paint0_linear)"
                fill-opacity="0.25"
                style={{ mixBlendMode: "soft-light" }}
              />
              <path
                d="M71.4 141.72C94.4584 141.72 112.247 134.651 124.266 122.142C136.273 109.644 142.32 91.9243 142.32 71H138.88C138.88 91.2757 133.027 108.056 121.784 119.758C110.553 131.449 93.7416 138.28 71.4 138.28V141.72ZM142.32 71C142.32 50.1739 136.272 32.4556 124.267 19.9344C112.25 7.40086 94.4619 0.279634 71.4 0.279634V3.72036C93.7381 3.72036 110.55 10.5991 121.783 22.3156C133.028 34.0444 138.88 50.8261 138.88 71H142.32ZM71.4 0.279634C48.2402 0.279634 30.402 7.39956 18.3595 19.9331C6.32838 32.4547 0.279636 50.1739 0.279636 71H3.72037C3.72037 50.8261 9.57162 34.0453 20.8405 22.3169C32.098 10.6004 48.9598 3.72036 71.4 3.72036V0.279634ZM0.279636 71C0.279636 91.9243 6.32745 109.645 18.3607 122.143C30.4048 134.653 48.2437 141.72 71.4 141.72V138.28C48.9563 138.28 32.0952 131.447 20.8393 119.757C9.57256 108.055 3.72037 91.2757 3.72037 71H0.279636ZM71.4 101.68C59.9772 101.68 53.4178 99.765 49.5697 95.3671C45.6556 90.8938 44.1204 83.4002 44.1204 71H40.6796C40.6796 83.3998 42.1444 92.1062 46.9803 97.6329C51.8822 103.235 59.8228 105.12 71.4 105.12V101.68ZM44.1204 71C44.1204 58.5998 45.6556 51.1062 49.5697 46.6329C53.4178 42.235 59.9772 40.3204 71.4 40.3204V36.8796C59.8228 36.8796 51.8822 38.765 46.9803 44.3671C42.1444 49.8938 40.6796 58.6002 40.6796 71H44.1204ZM71.4 40.3204C82.7193 40.3204 89.228 42.2337 93.0521 46.6292C96.9448 51.1036 98.4796 58.6004 98.4796 71H101.92C101.92 58.5996 100.455 49.8964 95.6479 44.3708C90.772 38.7663 82.8807 36.8796 71.4 36.8796V40.3204ZM98.4796 71C98.4796 83.3996 96.9448 90.8964 93.0521 95.3708C89.228 99.7663 82.7193 101.68 71.4 101.68V105.12C82.8807 105.12 90.772 103.234 95.6479 97.6292C100.455 92.1036 101.92 83.4004 101.92 71H98.4796ZM220.08 138V139.72H221.8V138H220.08ZM220.08 4H221.8V2.27963H220.08V4ZM185.08 4V2.27963H184.057L183.569 3.17775L185.08 4ZM146.68 20.6V18.8796H144.959V20.6H146.68ZM146.68 46H144.959V47.7204H146.68V46ZM182.48 46H184.2V44.2796H182.48V46ZM182.48 138H180.759V139.72H182.48V138ZM221.8 138V4H218.359V138H221.8ZM220.08 2.27963H185.08V5.72036H220.08V2.27963ZM183.569 3.17775C180.038 9.66654 175.616 13.5377 170.39 15.8239C165.11 18.134 158.888 18.8796 151.68 18.8796V22.3204C159.072 22.3204 165.85 21.566 171.769 18.9761C177.744 16.3623 182.721 11.9334 186.591 4.82224L183.569 3.17775ZM151.68 18.8796H146.68V22.3204H151.68V18.8796ZM144.959 20.6V46H148.4V20.6H144.959ZM146.68 47.7204H182.48V44.2796H146.68V47.7204ZM180.759 46V138H184.2V46H180.759ZM182.48 139.72H220.08V136.28H182.48V139.72Z"
                fill="white"
                fill-opacity="0.5"
                style={{ mixBlendMode: "overlay" }}
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="-2"
                  y1="1.12096"
                  x2="113.066"
                  y2="209.725"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <Text as={"span"} width="100%" position={"relative"}>
              Unique Computer
            </Text>
            <br />
            <Text as={"span"}> Generated NFT’s.</Text>
          </Heading>
          <Text color={"white"} fontFamily="Satoshi-Medium" fontSize="16px">
            Pro Camel Riders are 9,999 unique collectibes that display the
            beauty of the Arab world. Each NFT is unique and programmatically
            generated using 100+ hand drawn assets.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <NavLink path="mint">
              <Button
                /* Learn More */
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                fontFamily="Satoshi-Medium"
                borderRadius="3px"
                fontSize="16px"
                background="linear-gradient(97.36deg, #7234F5 0%, #3D70F0 100%), linear-gradient(97.36deg, #00A272 0%, #00A298 100%), #00A272"
              >
                Mint Now
              </Button>
            </NavLink>
            {/* <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              leftIcon={<PlayIcon h={4} w={4} color={"gray.300"} />}
            >
              How It Works
            </Button> */}
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("red.50", "red.400")}
          />
          <Box
            position={"relative"}
            height={"400px"}
            rounded={"md"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={gif}
            />
          </Box>
        </Flex>
      </Stack>
      <Box
        position="absolute"
        bottom="80px"
        left="50%"
        transform="translateX(-50%)"
        fontFamily="ClashDisplay-Regular"
        color="white"
        _after={{
          content: "''",
          display: "block",
          height: "50px",
          width: "1px",
          background: "white",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "-60px",
          opacity: 0.4,
        }}
      >
        <Text>Scroll Down</Text>
      </Box>
    </Flex>
  );
}

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
