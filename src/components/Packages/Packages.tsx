import { Box, Flex, Text, Switch, Image, Button, Grid } from "@chakra-ui/react";
import { checkIcon } from "../../assets";
import { PackageBoxProps } from "../../interface";
import { PACKAGES } from "../../utils/data";
const Packages = () => {
  return (
    <Box
      as="section"
      className="container"
      mt={["32px", null, "64px"]}
      mb={["50px", null, "100px"]}
    >
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
          Ready to Join our Community?
        </Text>
        <Text
          as="p"
          color="grey.500"
          fontSize={["12px", null, "20px"]}
          mb={["12px", null, "24px"]}
        >
          Choose the package that suit you
        </Text>
        <Flex
          gap="8px"
          alignItems="center"
          sx={{
            p: {
              color: "green.100",
              fontWeight: "500",
              fontSize: ["12px", null, "16px"],
            },
          }}
        >
          <Text as="p">Bill Monthly</Text>
          <Switch colorScheme="teal" size={["md", null, "lg"]} />
          <Text as="p">Annual Anniversary pricing (save 50%)</Text>
        </Flex>
      </Flex>
      <Grid
        templateColumns={["1fr", null, "1fr 1fr 1fr"]}
        columnGap="32px"
        rowGap="16px"
        mt={["24px", null, "48px"]}
      >
        {PACKAGES.map((packageData, index) => (
          <PackageBox data={packageData} key={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default Packages;

const PackageBox = (props: PackageBoxProps) => {
  const { data } = props;
  const { title, price, duration, bgColor, features: FEATURES } = data;
  return (
    <Box
      as="article"
      p={["10px", null, "20px"]}
      border="1px solid #DFE5E6"
      borderRadius="8px"
      display="flex"
      flexDirection="column"
    >
      <Text
        as="h2"
        fontWeight="semibold"
        fontSize={["16px", null, "24px"]}
        color="black.200"
        mb={["8px", null, "12px"]}
      >
        {title}
      </Text>
      <Text
        as="p"
        fontWeight="bold"
        fontSize={["20px", null, "40px"]}
        color="black.200"
      >
        {price}
      </Text>
      <Text
        as="p"
        fontSize={["12px", null, "14px"]}
        color="black.200"
        my={["8px", null, "12px"]}
      >
        {duration}
      </Text>
      <Flex
        direction="column"
        gap={["8px", null, "16px"]}
        mb={["12px", null, "24px"]}
      >
        {FEATURES.map((feature: string, index: number) => (
          <Flex key={index} gap={["6px", null, "12px"]} alignItems="center">
            <Image src={checkIcon} alt="check icon" />
            <Text color="grey.600" fontSize={["12px", null, "14px"]}>
              {feature}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Button
        w="100%"
        bgColor={bgColor}
        color="white.100"
        py="12px"
        fontSize={["12px", null, "16px"]}
        mt="auto"
      >
        Get Started
      </Button>
    </Box>
  );
};
