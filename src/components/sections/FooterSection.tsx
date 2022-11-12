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

export function NavLink({ path, children, ...rest }) {
  return (
    <MenuLink
      to={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className="nav-item"
      activeClass="active"
      {...rest}
    >
      {children}
    </MenuLink>
  );
}

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      fontWeight={"500"}
      fontFamily="ClashDisplay-Semibold"
      fontSize={"lg"}
      mb={2}
    >
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function FooterSection() {
  return (
    <Stack
      bg="radial-gradient(40.03% 84.28% at 105.8% 79.31%, #FFFFFF 0%, rgba(109, 109, 109, 0) 100%), radial-gradient(41.49% 87.35% at 5.17% 100%, #FFFFFF 0%, rgba(109, 109, 109, 0) 100%), radial-gradient(35.39% 74.51% at 46.39% 100%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(39.27% 82.68% at 61.28% 100%, rgba(114, 52, 245, 0.25) 0%, rgba(0, 133, 255, 0) 100%), #141725"
      backgroundBlendMode="overlay, overlay, overlay, normal, normal"
      color={useColorModeValue("white", "white")}
      fontFamily="Satoshi-Medium"
      fontSize="16px"
      width="100%"
    >
      <Flex width="100%" direction={{ base: "column", md: "row" }}>
        <Box
          flex={6}
          borderRightWidth={{ base: 0, md: 1 }}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.100", "gray.100")}
          py={12}
        >
          <Stack
            spacing={{ base: 8, sm: 8 }}
            direction={{ base: "column", sm: "column" }}
            paddingX={{ base: "4rem" }}
            align={{ base: "center", md: "flex-start" }}
          >
            <Text textAlign={{ base: "center", md: "left" }}>
              Pro Camel Riders are 9,999 uniquely generated collectibles
            </Text>
            <Button
              /* Learn More */
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              fontFamily="ClashDisplay-SemiBold"
              borderRadius="3px"
              fontSize="16px"
              background="linear-gradient(97.36deg, #7234F5 0%, #3D70F0 100%), linear-gradient(97.36deg, #00A272 0%, #00A298 100%), #00A272"
            >
              Connected
            </Button>
          </Stack>
        </Box>

        <Box
          flex={8}
          py={20}
          px={16}
          textAlign={{ base: "center", md: "left" }}
        >
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={{ base: "center", md: "flex-start" }}>
              <ListHeader>Quick Nav</ListHeader>

              <NavLink path={"home"}>Introduction</NavLink>
              <NavLink path={"about"}>About Us</NavLink>
              <NavLink path={"roadmap"}>Roadmap</NavLink>
              <NavLink path={"mint"}>Mint Yours</NavLink>
              <NavLink path={"team"}>Farm Owners</NavLink>
            </Stack>

            {/* <Stack align={"flex-start"}>
                <ListHeader>Legal</ListHeader>
                <Link href={"#"}>Terms Of Service</Link>
                <Link href={"#"}>Privacy Policy</Link>
                <Link href={"#"}>Refund Policy</Link>
                <Link href={"#"}>Copyright</Link>
              </Stack> */}

            <Stack align={{ base: "center", md: "flex-start" }}>
              <ListHeader>Contact</ListHeader>
              <Link href={"#"}>OpenSea</Link>
              <Link href={"#"}>Discord</Link>
              <Link href={"#"}>Twitter</Link>
            </Stack>
          </SimpleGrid>
        </Box>
      </Flex>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        py={6}
        px={{ base: 5, md: 20 }}
      >
        <Text>Copyright © 2020 — 2021 Pro Camel Riders</Text>
      </Box>
    </Stack>
  );
}
