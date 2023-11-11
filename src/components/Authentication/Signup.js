import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  VStack,
  useToast,
} from "@chakra-ui/react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [profession, setProfession] = useState();

  const [show, setShow] = useState(false);

  const toast = useToast();

  const handleClick = () => {
    setShow(!show);
  };

  const submitHandler = () => {
    if (password !== confirmpassword) {
      toast({
        title: "Error Occured!",
        description: "Passwords do not match",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }

    if (localStorage.getItem(email)) {
      toast({
        title: "Error Occured!",
        description: "User already exist",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      profession: profession,
    };
    console.log(user);

    localStorage.setItem(email, JSON.stringify(user));

    toast({
      title: "Registration Successful!",
      description: "Please login",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom-left",
    });
    return;
  };

  return (
    <VStack spacing="5px">
      {/* Name */}
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      {/* Email */}
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      {/* Password */}
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {/* Confirm Password */}
      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {/* Phone number */}
      <FormControl id="phnNumber" isRequired>
        <FormLabel>Phone number</FormLabel>
        <Input
          placeholder="Enter your phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </FormControl>
      {/* Proffession */}
      <FormControl id="profession" isRequired>
        <FormLabel>Profession</FormLabel>
        <Select
          placeholder="Select your profession"
          onChange={(e) => {
            setProfession(e.target.value);
          }}
        >
          <option value="Student">Student</option>
          <option value="Employed">Employed</option>
          <option value="Self-employed">Self-employed</option>
        </Select>
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: "15" }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
