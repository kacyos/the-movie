import {
  Button,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

interface IModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

function Modal({ isOpen, onClose }: IModalProps) {
  return (
    <>
      <ChakraModal onClose={onClose} size="xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>asdssadasdas</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
}
