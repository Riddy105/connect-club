import { Box, Image, Text, Flex } from "@chakra-ui/react";
import {
  Live,
  Adebola,
  Akolag,
  Waves,
  Binca,
  QuickGo,
  Royal,
  Manifest,
  Primes,
} from "../../assets";
const Partners = () => {
  const PARTNER_LOGOS = [
    Live,
    Adebola,
    Akolag,
    QuickGo,
    Royal,
    Waves,
    Manifest,
    Primes,
    Binca,
  ];
  return (
    <Box mt={["24px", null, "84px"]} mb={["32px", null, "64px"]}>
      <Text
        color="grey.300"
        fontWeight="500"
        fontSize={["sm", null, "xl"]}
        textAlign="center"
        mb={["14px", null, "32px"]}
      >
        Join thousands of businesses worldwide who are already members of
        ClubConnect.
      </Text>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        overflow={["scroll", null, "auto"]}
      >
        {PARTNER_LOGOS.map((partner, index) => (
          <Image src={partner} key={index} />
        ))}
      </Flex>
    </Box>
  );
};

export default Partners;
