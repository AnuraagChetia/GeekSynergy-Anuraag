import React from "react";
import {
  Button,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
        />
      )}
      <Modal size="lg" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent height="310px">
          <ModalHeader
            fontSize="30px"
            fontFamily="Work sans"
            display="flex"
            pt="10"
            justifyContent="start"
          >
            Geeksynergy Technologies Pvt Ltd
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="start"
            justifyContent="center"
          >
            <Text fontSize="20px" fontFamily="Work sans">
              Address: Sanjayanagar, Bengaluru-56
            </Text>
            <Text fontSize="20px" fontFamily="Work sans">
              Phone: XXXXXXXXX09
            </Text>
            <Text fontSize="20px" fontFamily="Work sans">
              Email: XXXXXX@gmail.com
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
