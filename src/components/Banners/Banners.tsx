import { Box, Text, Flex, Image, Grid } from "@chakra-ui/react";
import { BannerCardProps } from "../../interface";
import { BANNERS } from "../../utils/data";
const Banners = () => {
  return (
    <Box as="section" className="container">
      <Flex direction="column" gap="8px" alignItems="center">
        <Text as="p" color="#FD8204" fontSize={["14px", null, "16px"]}>
          Why to Join Us
        </Text>
        <Text
          as="h2"
          color="black.200"
          fontSize={["24px", null, "48px"]}
          fontWeight="400"
        >
          Join the growing community.
        </Text>
        <Text
          as="p"
          color="grey.500"
          fontSize={["12px", null, "xl"]}
          textAlign="center"
          w="75%"
        >
          Ensure You Maximize Your Return on Investment by Joining Club Connect
          Community
        </Text>
      </Flex>
      <Grid
        as="section"
        templateColumns={["1fr", null, "1fr 1fr"]}
        gap={["10px 0", null, "17px 24px"]}
        mt={["32px", null, "64px"]}
      >
        {BANNERS.map((bannerData, index, arr) => (
          <BannerCard
            data={bannerData}
            key={index}
            lastCard={index === arr.length - 1}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Banners;

const BannerCard = (props: BannerCardProps) => {
  const { data, lastCard } = props;
  const { title, text, bgColor, icon } = data;
  return (
    <Flex
      gridColumn={lastCard ? ["auto", null, "span 2"] : ""}
      direction={lastCard ? "column-reverse" : "row"}
      gap={lastCard ? ["10px", null, "32px"] : ["18px", null, "24px"]}
      bgColor={bgColor}
      alignItems={lastCard ? "end" : "center"}
      p={
        lastCard
          ? ["25px", null, "60px 80px 30px 30px"]
          : ["28px 28px 28px 14px", null, "50px 50px 30px 25px"]
      }
      borderRadius="10px"
    >
      <Image
        src={icon}
        alt={title}
        h={lastCard ? ["120px", null, "auto"] : ["50px", null, "auto"]}
        w={lastCard ? ["120px", null, "auto"] : ["50px", null, "auto"]}
      />
      <Box as="article">
        <Text
          color="black.300"
          fontWeight="600"
          as="h2"
          fontSize={lastCard ? ["20px", null, "48px"] : ["16px", null, "30px"]}
        >
          {title}
        </Text>
        <Text
          as="p"
          color="grey.400"
          fontSize={lastCard ? ["14px", null, "24px"] : ["12px", null, "16px"]}
        >
          {text}
        </Text>
      </Box>
    </Flex>
  );
};
