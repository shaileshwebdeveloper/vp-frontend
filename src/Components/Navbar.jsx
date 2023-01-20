import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Flex justifyContent="space-evenly" alignItems="center" p="1%" backgroundColor={'#b2f5ea'}>
        <Link to="/">
          <Button
            w="200%"
            colorScheme="teal"
            variant="outline"
            width="200px"
            h="60px"
          >
            Page One
          </Button>
        </Link>
        <Link to="/page-two">
          <Button
            w="250%"
            colorScheme="teal"
            variant="outline"
            width="200px"
            h="60px"
          >
            Page Two
          </Button>
        </Link>
      </Flex>
      <br />
    </>
  );
};
