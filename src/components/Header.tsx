import React from "react";
import { Link } from "wouter";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Logo from "./Logo";
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

const MenuItem = ({ children, isLast, to = "/", ...rest }: any) => {
  return (
    <NavLink
      to={to}
      spy={true}
      offset={0}
      smooth={true}
      duration={500}
      activeClass="active"
      {...rest}
    >
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
        {...rest}
      >
        {children}
      </Text>
    </NavLink>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Header = (props: any) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      position={{ base: "initial", md: "absolute" }}
      top="0"
      p={8}
      zIndex="9"
      color={"white"}
      {...props}
    >
      <Flex align="center">
        {/* <Logo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        /> */}
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
          fontFamily="ClashDisplay-Regular"
        >
          <MenuItem to="home">Home</MenuItem>
          <MenuItem to="about">About </MenuItem>
          <MenuItem to="roadmap">Roadmap </MenuItem>
          <MenuItem to="mint">Mint Yours </MenuItem>
          <MenuItem to="team">Farm Owners</MenuItem>
          <MenuItem to="/" isLast>
            <Button
              size="md"
              color={["primary.500", "primary.500", "white", "white"]}
              bg={"transparent"}
              variant="outline"
              borderRadius="2px"
              fontWeight="600"
              fontSize="14px"
              _hover={{
                bg: [
                  "transparent",
                  "primary.100",
                  "primary.600",
                  "primary.600",
                ],
              }}
            >
              Connected
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
