import { useState } from "react";
import { connectLogo } from "../../assets";
import { Flex, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoIosMenu, IoIosClose } from "react-icons/io";
const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mt="25px"
      p="10px"
      border="1px solid"
      borderColor="grey.100"
      borderRadius="8px"
      className="container"
    >
      <Image src={connectLogo} alt="Connect logo"></Image>
      <Flex
        display={["none", null, "flex"]}
        gap="24px"
        sx={{
          ".link": {
            fontSize: "xl",
            fontWeight: "normal",
          },
        }}
      >
        <Link to="/" className="link" style={{ color: "#000" }}>
          Home
        </Link>
        <Link to="/" className="link" style={{ color: "#000", opacity: "0.6" }}>
          About Us
        </Link>
      </Flex>
      <Flex gap="16px" display={["none", null, "flex"]}>
        <Link
          to="/"
          style={{
            color: "#93D50A",
            padding: "14px 30px",
            border: "1px solid #93D50A",
            borderRadius: "8px",
          }}
        >
          Login
        </Link>
        <Link
          to="/"
          style={{
            color: "#fff",
            backgroundColor: "#93D50A",
            borderRadius: "8px",
            padding: "16px 32px",
          }}
        >
          Join Us
        </Link>
      </Flex>
      <Box
        display={["block", null, "none"]}
        sx={{
          ".icon": {
            fontSize: "40px",
          },
        }}
      >
        {!navOpen && <IoIosMenu className="icon" />}
        {navOpen && <IoIosClose className="icon" />}
      </Box>
    </Flex>
  );
};

export default NavBar;
