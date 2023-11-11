import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import React from "react";
import CompanyModal from "./CompanyModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    history.push("/");
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      w="100%"
      p="5px 10px 5px 10px"
      borderWidth="5px"
    >
      <Text fontSize="4xl" fontFamily="Work sans">
        GeekSynergy
      </Text>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          <CompanyModal>
            <MenuItem>Company Info</MenuItem>
          </CompanyModal>
          <MenuDivider />
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Header;
