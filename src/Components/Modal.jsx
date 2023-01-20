import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useRef, useState } from "react";

export const EditModal = ({ User }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [data, setData] = useState({
    name: User.name,
    email: User.email,
    dob: User.dob,
    address: User.address,
    country: User.country,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const { name, email, dob, address, country } = data;


  //************ PATCH REQUEST ***************/

  const handleUpdate = async () => {
    return await axios.patch(`https://value-pitch.onrender.com/${User._id}`, data, {
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
  };

  return (
    <>
      <Button onClick={onOpen}>Edit</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={email}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Date of Birth</FormLabel>
              <Input
                type="date"
                placeholder="Date of Birth"
                name="dob"
                value={dob}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Address</FormLabel>
              <Input
                placeholder="Address"
                name="address"
                value={address}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Country</FormLabel>
              <Input
                placeholder="Country"
                name="country"
                value={country}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleUpdate();
                onClose();
              }}
            >
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
