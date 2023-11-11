import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const [show, setShow] = useState(false);

  const history = useHistory();

  const toast = useToast();

  const handleClick = () => {
    setShow(!show);
  };

  const submitHandler = () => {
    const user = JSON.parse(localStorage.getItem(email));

    //if credentials doesn't match
    if (!user || password !== user.password) {
      toast({
        title: "Error Occured!",
        description: "Invalid Credentials",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }

    localStorage.setItem("isLoggedIn", true);
    history.push("/movies");
  };

  return (
    <VStack spacing="5px">
      {/* Email */}
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      {/* Password */}
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
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

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: "15" }}
        onClick={submitHandler}
      >
        Log in
      </Button>
    </VStack>
  );
};

export default Login;
