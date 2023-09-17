import { Box, Image, Text, Button } from "@chakra-ui/react";
import { Indicator, eventImage, leftIcon, rightIcon } from "../../assets";
const Carousel = () => {
  return (
    <Box position="relative" className="container">
      <Image src={eventImage} alt="Event Image" w="100%" />
      <Text
        position="absolute"
        bottom="20px"
        fontSize={["32px", null, "128px"]}
        color="white.100"
      >
        EVENTS
      </Text>
      <Button
        bgColor="rgba(255, 255, 255, 0.60)"
        p="10px"
        position="absolute"
        top="50%"
        right="20px"
        transform={[null, null, "translateY(-100%)"]}
      >
        <Image src={rightIcon} alt="Right Icon" />
      </Button>
      <Button
        bgColor="rgba(255, 255, 255, 0.60)"
        p="10px"
        position="absolute"
        top="50%"
        left="20px"
        transform={[null, null, "translateY(-100%)"]}
      >
        <Image src={leftIcon} alt="Left Icon" />
      </Button>
      <Image src={Indicator} alt="carousel indicator" mt="12px" mx="auto" />
    </Box>
  );
};

export default Carousel;
