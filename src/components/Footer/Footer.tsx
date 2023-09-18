import { Box, Grid, Text, Flex, Image } from "@chakra-ui/react";
import { FooterLinksProps } from "../../interface";
import { Link } from "react-router-dom";
import { connectLogo } from "../../assets";
import { FOOTER_LINKS, SOCIALS } from "../../utils/data";
const Footer = () => {
  return (
    <>
      <Grid
        templateColumns={["1fr", null, "1fr 1fr"]}
        mt={["40px", null, "80px"]}
        mb={["40px", null, "80px"]}
        className="container"
        rowGap="24px"
      >
        <Grid templateColumns="1fr 1fr 1fr">
          {FOOTER_LINKS.map((data, index) => (
            <FooterLinks title={data.title} links={data.links} key={index} />
          ))}
        </Grid>
        <Flex
          direction="column"
          gap={["8px", null, "16px"]}
          alignItems="flex-start"
          w="80%"
          justifySelf={["start", null, "end"]}
        >
          <Image src={connectLogo} alt="Connect logo" />
          <Text as="p" color="grey.800" fontSize={["14px", null, "16px"]}>
            Club Connect helps me grow my business. I have been connected to the
            right network and at the same time I have been rewarded with
            training and mentoring. I highly recommend this to all.
          </Text>
          <Flex gap="16px">
            {SOCIALS.map((social, index) => (
              <Link to="/">
                <Image src={social} key={index} />
              </Link>
            ))}
          </Flex>
        </Flex>
      </Grid>
      {/* <Text
        bgColor="green.100"
        py={["14px", null, "18px"]}
        fontSize="16px"
        textAlign="center"
        textTransform="uppercase"
        fontWeight="bold"
      >
        Developed by{" "}
        <Link
          to="https://www.linkedin.com/in/ridwan-olaniran/"
          style={{ color: "#f00" }}
        >
          Olaniran Ridwan
        </Link>
      </Text> */}
    </>
  );
};

export default Footer;

const FooterLinks = (props: FooterLinksProps) => {
  const { title, links: LINKS } = props;
  return (
    <Box>
      <Text
        mb={["12px", null, "24px"]}
        color="black.100"
        fontWeight="500"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <Flex
        direction="column"
        gap={["12px", null, "24px"]}
        sx={{
          a: {
            color: "#000000B2",
            fontSize: ["14px", null, "16px"],
          },
        }}
      >
        {LINKS.map((link, index) => (
          <Link to="/" key={index}>
            {link}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};
