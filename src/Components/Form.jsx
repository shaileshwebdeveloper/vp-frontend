import axios from "axios";
import React, { useState } from "react";
import { getData } from "./PageOne";
import { FormLabel, Input, Text } from "@chakra-ui/react";


const initState = {
  name: "",
  email: "",
  dob: "",
  address: "",
  country: "",
};



export const Form = () => {
  const [data, setData] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

 //****************** POST REQUEST*******************/

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("https://value-pitch.onrender.com", data);
    await getData();
  };

  const { name, email, dob, address, country } = data;

  return (
    <form onSubmit={handleSubmit} style={{ width: "30%", margin: "auto" }}>
      <Text fontSize="lg" fontWeight={"bold"}>
        USER INFO
      </Text>
      <FormLabel>Name</FormLabel>
      <Input
        type="text"
        value={name}
        name="name"
        onChange={handleChange}
        required
      />
      <br />
      <FormLabel>Email</FormLabel>
      <Input
        value={email}
        name="email"
        onChange={handleChange}
        type="email"
        required
      />
      <br />
      <FormLabel>Date of Birth</FormLabel>
      <Input
        type="date"
        value={dob}
        name="dob"
        onChange={handleChange}
        required
      />
      <br />
      <FormLabel>Address</FormLabel>
      <Input
        type="text"
        value={address}
        name="address"
        onChange={handleChange}
        required
      />
      <br />
      <FormLabel>Country</FormLabel>
      <Input
        type="text"
        value={country}
        name="country"
        onChange={handleChange}
        required
      />
      <br />
      <br />
      <Input type="submit" backgroundColor={"#b2f5ea"} outline={'teal'} />
      <br />
    </form>
  );
};
