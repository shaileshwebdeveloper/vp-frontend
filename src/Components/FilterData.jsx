import { Button, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { handleDelete } from "./PageOne";
import { EditModal } from "./Modal";

export const FilterData = ({ filterData }) => {
  return (
    <>
      {filterData.map((user) => (
        <Tr key={user._id}>
          <Td>{user.name}</Td>
          <Td>{user.email}</Td>
          <Td isNumeric>{user.dob}</Td>
          <Td>{user.address}</Td>
          <Td>{user.country}</Td>
          <Td>
            <EditModal User={user} />
          </Td>
          <Td onClick={() => handleDelete(user._id)}>
            <Button>Delete</Button>
          </Td>
        </Tr>
      ))}
    </>
  );
};
