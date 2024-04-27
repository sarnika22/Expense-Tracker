import { Button, Flex, Heading } from "@chakra-ui/react";
import { color } from "framer-motion";
import Summary from "../summary";
import ExpenseView from "../expense-view";

export default function Main() {
  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={5} pl={5}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button bg={"blue.300"} color={"purple"} ml={"4"}>
            Add new Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary />
      <Flex>
        <Flex
          w={"full"}
          alignItems={"flex-start"}
          justifyContent={"space-evenly"}
          flexDirection={['column', 'column', 'column', 'row', 'row']}
        >
          <ExpenseView />
          <ExpenseView />
        </Flex>
      </Flex>
    </Flex>
  );
}
