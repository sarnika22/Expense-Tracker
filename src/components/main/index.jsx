import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { color } from "framer-motion";
import Summary from "../summary";
import ExpenseView from "../expense-view";

export default function Main() {
  const { isOpen, onClose, onOpen } = useDisclosure();

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
          <Button onClick={onOpen} bg={"blue.300"} color={"purple"} ml={"4"}>
            Add new Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary isOpen={isOpen} onClose={onClose} />
      <Flex>
        <Flex
          w={"full"}
          alignItems={"flex-start"}
          justifyContent={"space-evenly"}
          flexDirection={["column", "column", "column", "row", "row"]}
        >
          <ExpenseView />
          <ExpenseView />
        </Flex>
      </Flex>
    </Flex>
  );
}
