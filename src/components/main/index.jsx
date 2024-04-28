/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
//import { color } from "framer-motion";
import Summary from "../summary";
import ExpenseView from "../expense-view";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";

export default function Main() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransaction,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransaction.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransaction]);

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
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex>
        <Flex
          w={"full"}
          alignItems={"flex-start"}
          justifyContent={"space-evenly"}
          flexDirection={["column", "column", "column", "row", "row"]}
        >
          <ExpenseView
            data={allTransaction.filter((item) => item.type === "expense")}
            type={"expense"}
          />
          <ExpenseView
            data={allTransaction.filter((item) => item.type === "income")}
            type={"income"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
