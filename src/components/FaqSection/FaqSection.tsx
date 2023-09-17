import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { minusIcon, plusIcon } from "../../assets";
import { FaqBlockProps } from "../../interface";
import { FAQS } from "../../utils/data";
import { useState } from "react";
const FaqSection = () => {
  return (
    <Box as="section" width={["90%", null, "60%"]} mx="auto">
      <Flex direction="column" alignItems="center">
        <Text
          as="h2"
          color="black.100"
          fontSize={["24px", null, "48px"]}
          fontWeight="medium"
          mb={["8px", null, "16px"]}
          w={["100%", null, "50%"]}
          textAlign="center"
        >
          Frequently Asked Questions
        </Text>
        <Text
          as="p"
          color="grey.500"
          fontSize={["12px", null, "20px"]}
          mb={["24px", null, "48px"]}
          w={["100%", null, "70%"]}
          textAlign="center"
        >
          You will find answers to the questions we get asked the most
        </Text>
      </Flex>
      <Flex direction="column" gap={["12px", null, "24px"]}>
        {FAQS.map((faq, index) => (
          <FaqBlock
            question={faq.question}
            answer={faq.answer}
            key={index}
            index={index}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default FaqSection;

const FaqBlock = (props: FaqBlockProps) => {
  const { question, answer, index } = props;
  const [faqOpen, setFaqOpen] = useState(index === 0);

  const openFaqHandler = () => {
    setFaqOpen((prev) => !prev);
  };
  return (
    <Box py={["16px", null, "32px"]} borderBottom="1px solid #EAECF0">
      <Flex
        onClick={openFaqHandler}
        justifyContent="space-between"
        w="100%"
        bgColor="transparent"
        alignItems="flex-start"
        mb="8px"
      >
        <Text
          as="p"
          color="black.400"
          fontSize={["16px", null, "20px"]}
          fontWeight="medium"
        >
          {question}
        </Text>
        <Image src={faqOpen ? minusIcon : plusIcon} />
      </Flex>
      {faqOpen && (
        <Text as="p" color="grey.600" fontSize={["12px", null, "16px"]}>
          {answer}
        </Text>
      )}
    </Box>
  );
};
