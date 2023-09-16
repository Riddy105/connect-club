import { Box, Grid, Image, Text, Button, Flex } from "@chakra-ui/react";
import { groupwork, personOne, personTwo, personThree } from "../../assets";
const HeroSection = () => {
  const PEOPLE = [personOne, personTwo, personThree];
  return (
    <Grid
      templateColumns={["1fr", null, "1fr 1fr"]}
      as="section"
      mt={["30px", null, "64px"]}
      className="container"
      rowGap="20px"
    >
      <Box>
        <Text
          as="h2"
          color="black.200"
          fontSize={["38px", null, "64px"]}
          fontWeight="500"
          mb={["8px", null, "16px"]}
          w="75%"
        >
          Boost Your Business Achievement
        </Text>
        <Text
          as="p"
          color="rgba(69, 72, 79, 0.70)"
          fontSize={["14px", null, "24px"]}
          mb={["16px", null, "32px"]}
          w="80%"
        >
          Connect and Engage with Communities of Fellow Entrepreneurs and
          Problem-Solvers
        </Text>
        <Button
          color="white.100"
          bgColor="green.100"
          borderRadius="8px"
          p={["8px 19px", null, "16px 32px"]}
          mb={["16px", null, "32px"]}
        >
          Join Us
        </Button>
        <Flex alignItems="flex-start" gap="5px">
          <Flex>
            {PEOPLE.map((person, index) => (
              <Image
                src={person}
                key={index}
                ml={index === 0 ? "0px" : "-6px"}
              />
            ))}
          </Flex>
          <Box
            height="8px"
            width="8px"
            bgColor="#00B080"
            borderRadius="50%"
          ></Box>
          <Text as="p">5m+ world active users</Text>
        </Flex>
      </Box>
      <Box
        p={["9px", null, "18px"]}
        border="1px solid #D2DADA"
        borderRadius="7px"
      >
        <Image
          src={groupwork}
          alt="Group Working Together"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>
    </Grid>
  );
};

export default HeroSection;
