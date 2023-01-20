import React, { useEffect } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Flex,
  TableContainer,
  Button,
  Box,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "./Form";
import { FilterData } from "./FilterData";
import { CSVLink } from "react-csv";
import styles from "../css/pageone.module.css";

export const getData = () => {
  return axios.get("https://value-pitch.onrender.com/");
};

export const handleDelete = (id) => {
  return axios.delete(`https://value-pitch.onrender.com/${id}`);
};

export const PageOne = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    getData().then((r) => setData(r.data.data));
  }, [data]);

  const handleSearch = () => {
    const ans = data.filter(
      (e) =>
        e.name === search ||
        e.email === search ||
        e.dob === search ||
        e.address === search ||
        e.country === search
    );

    setFilterData(ans);
  };

  return (
    <Box>
      <Form />

      <br />

      <Flex justifyContent={"space-around"} backgroundColor={'#b2f5ea'} p='1rem' w='95%' m='auto'> 
        <Box w="80%">
          <Input
            type={"text"}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search............."
            variant='outline'
            colorScheme='teal'
            border = '1px solid teal'
            w="50%"
          />
          <Button colorScheme="teal" variant="outline" onClick={handleSearch}>
            Search
          </Button>
        </Box>

        <Box w="20%">
          <CSVLink data={data}>
            <Button size="sm" colorScheme="teal" variant="outline">
              Download User Info
            </Button>
          </CSVLink>
        </Box>
      </Flex>

      <TableContainer className={styles.tableContainer} p="2%">
        <Table variant="striped" colorScheme="teal" b="1px solid black">
          <Thead backgroundColor={"black"} color="white">
            <Tr border="1px solid black">
              <Th>Name</Th>
              <Th>Email</Th>
              <Th isNumeric>Dob</Th>
              <Th>Address</Th>
              <Th>Country</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <>
            <Tbody>
              {filterData.length > 0 && search !== "" ? (
                <FilterData filterData={filterData} />
              ) : (
                <FilterData filterData={data} />
              )}
            </Tbody>
          </>
        </Table>
      </TableContainer>
    </Box>
  );
};
