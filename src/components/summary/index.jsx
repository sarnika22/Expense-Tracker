import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Summary() {
  return (
    <Box
      p={"6"}
      border={"1px solid"}
      borderColor={"gray.100"}
      overflow={"hidden"}
      borderRadius={"10"}
      background={"white"}
      display={"flex"}
    >
      <Flex
        w={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Flex
          flex={1}
          w={"full"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          ml={"-20"}
          mr={"2"}
        >
          <Heading size={"md"} mb={"gray.600"}>
            Balance is 100
          </Heading>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w={"full"}
            h={"100px"}
            border={"1px solid"}
            borderColor={"gary.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>$ 100</Heading>
              <Text color={"gray.500"}>Total Income</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
