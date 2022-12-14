import {
  Badge,
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import SectionNumber from "../SectionNumber";
import MintSection from "./MintSection";

const activations = [
  {
    text: "At this point of the process, Comic Book drafting will commence.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.7933 14.3867L21.7966 13.4117L13.4008 21.7967L14.4083 22.8042C15.2533 23.6492 16.1308 24.0717 16.9974 24.0717C17.8641 24.0717 18.7416 23.6492 19.5866 22.8042L22.7933 19.5975C24.5158 17.8642 24.5158 16.12 22.7933 14.3867Z"
          fill="white"
        />
        <path
          d="M11.5809 3.17409C9.88007 1.47326 8.09257 1.47326 6.39174 3.17409L3.17424 6.38076C1.48424 8.08159 1.48424 9.86909 3.17424 11.5699L4.1709 12.5666L12.5667 4.17076L11.5809 3.17409Z"
          fill="white"
        />
        <path
          d="M23.6276 4.26841C22.2084 7.81091 18.9693 12.4367 15.8818 15.4592C15.4376 12.6642 13.2059 10.4759 10.3893 10.0859C13.4226 6.98758 18.0809 3.70508 21.6343 2.27508C22.2626 2.03674 22.8909 2.22091 23.2809 2.61091C23.6926 3.02258 23.8876 3.64008 23.6276 4.26841Z"
          fill="white"
        />
        <path
          d="M14.9283 16.3474C14.7117 16.5316 14.495 16.7157 14.2783 16.8891L12.3392 18.4382C12.3392 18.4057 12.3283 18.3624 12.3283 18.3191C12.1767 17.1599 11.635 16.0874 10.7575 15.2099C9.86917 14.3216 8.76417 13.7799 7.55084 13.6282C7.51834 13.6282 7.475 13.6174 7.4425 13.6174L9.01334 11.6349C9.165 11.4399 9.32751 11.2557 9.50084 11.0607L10.2375 11.1582C12.5667 11.4832 14.4408 13.3141 14.8092 15.6324L14.9283 16.3474Z"
          fill="white"
        />
        <path
          d="M11.2994 19.0882C11.2994 20.2799 10.8444 21.4174 9.97769 22.2732C9.31686 22.9449 8.42853 23.3999 7.34519 23.5299L4.69103 23.8224C3.23936 23.9849 1.99353 22.7391 2.15603 21.2766L2.44853 18.6116C2.70853 16.2391 4.69103 14.7224 6.79269 14.6791C6.99853 14.6682 7.22603 14.6791 7.44269 14.7007C8.36353 14.8199 9.25186 15.2424 9.99936 15.9791C10.7252 16.7049 11.1369 17.5607 11.256 18.4599C11.2777 18.6766 11.2994 18.8824 11.2994 19.0882Z"
          fill="white"
        />
      </svg>
    ),
    progress: "25%",
  },
  {
    text: "Merch will go live exclusively for Camel owners.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.2233 8.95916L23.9091 5.95832C23.4541 2.68666 21.97 1.35416 18.7958 1.35416H16.2391H14.6358H11.3425H9.73914H7.13914C3.95414 1.35416 2.48081 2.68666 2.01497 5.99082L1.72247 8.96999C1.61414 10.1292 1.92831 11.2558 2.61081 12.1333C3.43414 13.2058 4.70164 13.8125 6.10997 13.8125C7.47497 13.8125 8.78581 13.13 9.60914 12.0358C10.3458 13.13 11.6025 13.8125 13 13.8125C14.3975 13.8125 15.6216 13.1625 16.3691 12.0792C17.2033 13.1517 18.4925 13.8125 19.8358 13.8125C21.2766 13.8125 22.5766 13.1733 23.3891 12.0467C24.0391 11.18 24.3316 10.0858 24.2233 8.95916Z"
          fill="white"
        />
        <path
          d="M12.2958 18.0484C10.92 18.1892 9.88 19.3592 9.88 20.7459V23.7142C9.88 24.0067 10.1183 24.245 10.4108 24.245H15.5783C15.8708 24.245 16.1092 24.0067 16.1092 23.7142V21.125C16.12 18.8609 14.7875 17.7884 12.2958 18.0484Z"
          fill="white"
        />
        <path
          d="M23.1508 15.6V18.8283C23.1508 21.8183 20.7242 24.245 17.7342 24.245C17.4417 24.245 17.2033 24.0066 17.2033 23.7141V21.125C17.2033 19.7383 16.7808 18.655 15.9575 17.9183C15.2317 17.2575 14.2458 16.9325 13.0217 16.9325C12.7508 16.9325 12.48 16.9433 12.1875 16.9758C10.2592 17.1708 8.79665 18.7958 8.79665 20.7458V23.7141C8.79665 24.0066 8.55832 24.245 8.26582 24.245C5.27582 24.245 2.84915 21.8183 2.84915 18.8283V15.6216C2.84915 14.8633 3.59665 14.3541 4.30082 14.6033C4.59332 14.7008 4.88582 14.7766 5.18915 14.82C5.31915 14.8416 5.45998 14.8633 5.58998 14.8633C5.76332 14.885 5.93665 14.8958 6.10998 14.8958C7.36665 14.8958 8.60165 14.43 9.57665 13.6283C10.5083 14.43 11.7217 14.8958 13 14.8958C14.2892 14.8958 15.4808 14.4516 16.4125 13.65C17.3875 14.4408 18.6008 14.8958 19.8358 14.8958C20.0308 14.8958 20.2258 14.885 20.41 14.8633C20.54 14.8525 20.6592 14.8416 20.7783 14.82C21.1142 14.7766 21.4175 14.6791 21.7208 14.5816C22.425 14.3433 23.1508 14.8633 23.1508 15.6Z"
          fill="white"
        />
      </svg>
    ),
    progress: "50%",
  },
  {
    text: "A Community grant will be initiated. Receive funding for your projects from the Pro Camel Riders team.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.41667 16.25C3.0225 16.25 1.08334 18.1892 1.08334 20.5833C1.08334 21.3958 1.31084 22.165 1.71167 22.815C2.45917 24.0717 3.835 24.9167 5.41667 24.9167C6.99834 24.9167 8.37417 24.0717 9.12167 22.815C9.5225 22.165 9.75 21.3958 9.75 20.5833C9.75 18.1892 7.81084 16.25 5.41667 16.25ZM7.55084 20.2258L5.24334 22.36C5.09167 22.5008 4.88584 22.5767 4.69084 22.5767C4.485 22.5767 4.27917 22.5008 4.11667 22.3383L3.04417 21.2658C2.73 20.9517 2.73 20.4317 3.04417 20.1175C3.35834 19.8033 3.87834 19.8033 4.1925 20.1175L4.7125 20.6375L6.44584 19.0342C6.77084 18.7308 7.29084 18.7525 7.59417 19.0775C7.8975 19.4025 7.87584 19.9225 7.55084 20.2258Z"
          fill="white"
        />
        <path
          d="M23.2917 13.5417H20.5833C19.3917 13.5417 18.4167 14.5167 18.4167 15.7083C18.4167 16.9 19.3917 17.875 20.5833 17.875H23.2917C23.595 17.875 23.8333 17.6367 23.8333 17.3333V14.0833C23.8333 13.78 23.595 13.5417 23.2917 13.5417Z"
          fill="white"
        />
        <path
          d="M17.9075 5.85003C18.2325 6.16419 17.9616 6.65169 17.5066 6.65169L8.53663 6.64086C8.01663 6.64086 7.75663 6.01253 8.12496 5.64419L10.0208 3.73753C11.6241 2.14503 14.2133 2.14503 15.8166 3.73753L17.8641 5.80669C17.875 5.81753 17.8966 5.83919 17.9075 5.85003Z"
          fill="white"
        />
        <path
          d="M23.6925 20.215C23.0317 22.4467 21.125 23.8333 18.525 23.8333H11.4833C11.0608 23.8333 10.79 23.3675 10.9633 22.9775C11.2883 22.2192 11.4942 21.3633 11.4942 20.5833C11.4942 17.3008 8.81832 14.625 5.53582 14.625C4.71249 14.625 3.91082 14.7983 3.17415 15.1233C2.77332 15.2967 2.28582 15.0258 2.28582 14.5925V13C2.28582 10.0533 4.06249 7.99501 6.82499 7.64834C7.09582 7.60501 7.38832 7.58334 7.69165 7.58334H18.525C18.8067 7.58334 19.0775 7.59418 19.3375 7.63751C21.5258 7.88668 23.1075 9.21918 23.6925 11.2017C23.8008 11.5592 23.5408 11.9167 23.1725 11.9167H20.6917C18.3408 11.9167 16.4775 14.0617 16.9867 16.4992C17.3442 18.2758 18.9908 19.5 20.8 19.5H23.1725C23.5517 19.5 23.8008 19.8683 23.6925 20.215Z"
          fill="white"
        />
      </svg>
    ),
    progress: "75%",
  },
  {
    text: "The Metaverse will be launched and many more projects! Each Camel will have voting rights to foresee the future of the project!",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.2941 5.94749V6.74916L15.4591 4.52832C14.0074 3.69416 11.9816 3.69416 10.5408 4.52832L6.70578 6.75999V5.94749C6.70578 3.50999 8.03828 2.16666 10.4758 2.16666H15.5241C17.9616 2.16666 19.2941 3.50999 19.2941 5.94749Z"
          fill="white"
        />
        <path
          d="M19.3267 8.63415L19.175 8.55831L17.7017 7.71331L14.6467 5.94748C13.715 5.40581 12.285 5.40581 11.3533 5.94748L8.29832 7.70248L6.82499 8.56915L6.62999 8.66665C4.73416 9.94498 4.60416 10.1833 4.60416 12.2308V17.1275C4.60416 19.175 4.73416 19.4133 6.67332 20.7241L11.3533 23.4216C11.8192 23.7033 12.4042 23.8225 13 23.8225C13.585 23.8225 14.1808 23.6925 14.6467 23.4216L19.37 20.6916C21.2767 19.4133 21.3958 19.1858 21.3958 17.1275V12.2308C21.3958 10.1833 21.2658 9.94498 19.3267 8.63415ZM16.0225 14.625L15.3617 15.4375C15.2533 15.5566 15.1775 15.7841 15.1883 15.9466L15.2533 16.9866C15.2967 17.6258 14.8417 17.9508 14.2458 17.7233L13.2817 17.3333C13.13 17.2791 12.8808 17.2791 12.7292 17.3333L11.765 17.7125C11.1692 17.9508 10.7142 17.615 10.7575 16.9758L10.8225 15.9358C10.8333 15.7733 10.7575 15.5458 10.6492 15.4266L9.97749 14.625C9.56582 14.1375 9.74999 13.5958 10.3675 13.4333L11.375 13.1733C11.5375 13.13 11.7217 12.9783 11.8083 12.8483L12.3717 11.9816C12.7183 11.44 13.2708 11.44 13.6283 11.9816L14.1917 12.8483C14.2783 12.9891 14.4733 13.13 14.625 13.1733L15.6325 13.4333C16.25 13.5958 16.4342 14.1375 16.0225 14.625Z"
          fill="white"
        />
      </svg>
    ),
    progress: "100%",
  },
];

interface StatsCardProps {
  text: string;
  progress: string;
  icon: ReactNode;
  isFirst: boolean;
}
function StatsCard(props: StatsCardProps) {
  const { text, icon, progress, isFirst } = props;
  return (
    <Stat
      px={{ base: 3, md: 4 }}
      p={"4"}
      //   shadow={"xl"}
      border={"2px solid rgba(255,255,255,0.07)"}
      rounded={"4px"}
      background="linear-gradient(139.13deg, rgba(255, 255, 255, 0.05) 0.04%, rgba(255, 255, 255, 0) 99.96%)"
      backgroundBlendMode="soft-light"
    >
      <Stack spacing={{ base: 4 }} align={{ base: "center", md: "flex-start" }}>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
          background="linear-gradient(97.36deg, #7234F5 0%, #3D70F0 100%),
          linear-gradient(97.36deg, #00A272 0%, #00A298 100%),
          linear-gradient(0deg, #C4C4C4, #C4C4C4)"
          boxSize="60px"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          {icon}
        </Box>
        <Badge
          alignItems="center"
          justifyContent="center"
          borderRadius="20px"
          display="inline-flex"
          height="30px"
          background="rgba(90, 96, 137, 1)"
          fontFamily="Satoshi-Bold"
          color="white"
          width="65%"
        >
          {progress} Progress
        </Badge>

        <Box>
          <StatLabel fontWeight={"medium"}>{text}</StatLabel>
        </Box>
      </Stack>
    </Stat>
  );
}

export default function RoadmapSection() {
  return (
    <Box
      mx={"auto"}
      /* bg="radial-gradient(40.03% 84.28% at 105.8% 79.31%, #FFFFFF 0%, rgba(109, 109, 109, 0) 100%), radial-gradient(41.49% 87.35% at 5.17% 100%, #FFFFFF 0%, rgba(109, 109, 109, 0) 100%), radial-gradient(35.39% 74.51% at 46.39% 100%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(39.27% 82.68% at 61.28% 100%, rgba(114, 52, 245, 0.25) 0%, rgba(0, 133, 255, 0) 100%), #141725"
      backgroundBlendMode="overlay, overlay, overlay, normal, normal" */
      pt={5}
      px={{ base: 5, md: 28 }}
      py="4rem"
      color="black"
      width="100%"
      textAlign={{ base: "center", md: "left" }}
      id="roadmap"
    >
      
      <MintSection />
    </Box>
  );
}
