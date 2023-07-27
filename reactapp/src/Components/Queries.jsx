import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
// import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { useNavigate, useNavigation ,useParams} from "react-router-dom";

export default function ContactFormWithSocialButtons() {
  const { id } = useParams();

  console.log(id);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const {
    name,
    email,
    message
  } = formData;

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestdata = {
      name,
      email,
      message,
    };

    try {
      // Make the Axios POST request to your desired endpoint
      const response = await axios.post(
        "http://localhost:2023/api/v1/auth/add",
        requestdata
      );
      console.log(response.data);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      navigate("/navbar2");
    } catch (error) {
      // Handle errors here (e.g., show an error message)
      console.error("Error:", error);
    }
  };

  const { hasCopied, onCopy } = useClipboard("example@example.com");

  return (
    <ChakraProvider>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        align="center"
        justify="center"
        css={{
          backgroundImage: useColorModeValue(),
          backgroundAttachment: "fixed",
        }}
        id="contact"
      >
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{
                  base: "4xl",
                  md: "5xl",
                }}
              >
                Queries
              </Heading>

              {/* Move onSubmit to the form element */}
              <form onSubmit={handleSubmit}>
                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base"
                >
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
                      <InputGroup>
                        <InputLeftElement />
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{ bg: "blue.500" }}
                      isFullWidth
                    >
                      Send Message
                    </Button>
                  </VStack>
                </Box>
              </form>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
