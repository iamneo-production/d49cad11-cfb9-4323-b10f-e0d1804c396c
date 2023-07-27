import React, { useState, useEffect } from 'react';
import Createuser from './Createuser';
import axios from 'axios';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  ChakraProvider,
  Wrap,
  WrapItem,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function CustomerCards() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2023/api/v1/auth/cust/get');
        setCustomers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Modal state
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Function to handle Add button click and show the Create User modal
  const handleAddButtonClick = () => {
    onOpen();
  };

  return (
    <ChakraProvider>
      <Center py={6} style={{ backgroundImage: `url('/images/bg.jpg')`,
                    backgroundSize: 'cover',}}>
        <Wrap spacing="20px">
          {customers.map((ele) => (
            <WrapItem key={ele.id}>
              <Box
                maxW={'320px'}
                w={'full'}
                bg="gray.900"
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
                width={'300px'}
                height={'400px'} // Set a fixed height for each card
              >
                <Avatar
                  size={'xl'}
                  // src={customer.avatarUrl}
                  alt={`Avatar of ${ele.fname}`}
                  mb={4}
                  pos={'relative'}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                  }}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'} color={'whiteAlpha.600'}>
                  {ele.fname}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                  {ele.email}
                </Text>
                <Text textAlign={'center'} color="white" px={3}>
                  Phone:{ele.mob}
                </Text>

                <Text align={'center'} justify={'center'} direction={'row'} mt={6} color={'whiteAlpha.800'}>
                  {ele.add}
                </Text>

                <Stack mt={8} direction={'row'} spacing={4}>
                  <Button flex={1} fontSize={'sm'} rounded={'full'} _focus={{ bg: 'gray.200' }}>
                    Message
                  </Button>
                  <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
                    _hover={{ bg: 'blue.500' }}
                    _focus={{ bg: 'blue.500' }}
                  >
                    Assign
                  </Button>
                </Stack>
              </Box>
            </WrapItem>
          ))}
        </Wrap>

        {/* Create User Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create User</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Render the Create User component inside the modal */}
              <Createuser onClose={onClose} />
            </ModalBody>
          </ModalContent>
          {/* <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter> */}
        </Modal>

        <IconButton
          icon={<AddIcon />}
          size="lg"
          colorScheme="teal"
          position="fixed"
          bottom={4}
          right={4}
          borderRadius="full"
          boxSize="3rem"
          onClick={handleAddButtonClick}
        />
      </Center>
    </ChakraProvider>
  );
}
