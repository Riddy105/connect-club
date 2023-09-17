import { useState } from "react";
import { connectLogo } from "../../assets";
import { Flex, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoIosMenu, IoIosClose } from "react-icons/io";
const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNavHandler = () => {
    setNavOpen((prev) => !prev);
  };
  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mt="25px"
        p="10px"
        border="1px solid"
        borderColor="grey.100"
        borderRadius="8px"
        className="container"
        as="nav"
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
          <Link
            to="/"
            className="link"
            style={{ color: "#000", opacity: "0.6" }}
          >
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
          onClick={toggleNavHandler}
          display={["block", null, "none"]}
          sx={{
            ".icon": {
              fontSize: "45px",
            },
          }}
        >
          {!navOpen && <IoIosMenu className="icon" />}
          {navOpen && <IoIosClose className="icon" />}
        </Box>
      </Flex>
      <MobileNav navOpen={navOpen} />
    </>
  );
};

export default NavBar;

const MobileNav = (props: any) => {
  const { navOpen } = props;
  return (
    <Flex
      display={["flex", null, "none"]}
      position="absolute"
      left="20px"
      w="90vw"
      h="100vh"
      bgColor="#eee"
      direction="column"
      gap="24px"
      alignItems="center"
      justifyContent="center"
      zIndex="10"
      transform={navOpen ? "translateX(0)" : "translateX(120%)"}
      transition="all 1s"
    >
      <Link to="/" className="link" style={{ color: "#000" }}>
        Home
      </Link>
      <Link to="/" className="link" style={{ color: "#000", opacity: "0.6" }}>
        About Us
      </Link>
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
  );
};
