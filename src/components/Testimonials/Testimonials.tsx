import { Box, Flex, Text, Image, Grid } from "@chakra-ui/react";
import { TESTIMONIALS } from "../../utils/data";
import { TestimonialCardProps } from "../../interface";
const Testimonials = () => {
  return (
    <Box as="section" className="container" my={["32px", null, "64px"]}>
      <Flex direction="column" alignItems="center">
        <Text
          as="h2"
          color="black.100"
          fontSize={["24px", null, "48px"]}
          fontWeight="medium"
          mb={["8px", null, "16px"]}
          w={["100%", null, "30%"]}
          textAlign="center"
        >
          What People say About Us
        </Text>
        <Text
          as="p"
          color="grey.500"
          fontSize={["12px", null, "20px"]}
          mb={["24px", null, "48px"]}
          w={["100%", null, "50%"]}
          textAlign="center"
        >
          Find out the impact by joining this community and what others have had
          to say about their experiences with us.
        </Text>
      </Flex>
      <Grid
        templateColumns={["1fr", null, "1fr 1fr", "1fr 1fr 1fr"]}
        columnGap="12px"
        rowGap="24px"
        bgColor="grey.700"
        p="20px 10px"
        borderRadius="8px"
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard data={testimonial} key={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;

const TestimonialCard = (props: TestimonialCardProps) => {
  const { data } = props;
  const { name, username, text, avatar, social } = data;
  return (
    <Flex
      alignItems="flex-start"
      p={["7px", null, "14px"]}
      border="1px solid #D9D9D9"
      borderRadius="8px"
      gap="6px"
      bgColor="white.100"
    >
      <Image src={avatar} alt={name} borderRadius="50%" />
      <Box as="article">
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Text as="p" color="black.100" fontSize="20px" fontWeight="medium">
              {name}
            </Text>
            <Text
              as="p"
              color="black.100"
              opacity="0.7"
              fontSize="14px"
              fontWeight="semibold"
            >
              {username}
            </Text>
          </Box>
          <Image src={social} />
        </Flex>
        <Text color="black.100" fontSize="14px">
          {text}
        </Text>
      </Box>
    </Flex>
  );
};
