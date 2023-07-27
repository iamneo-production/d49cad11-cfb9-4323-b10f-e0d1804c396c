import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChakraProvider, Center, Wrap, WrapItem } from "@chakra-ui/react";
import Assign from './Assign'; // Make sure to replace the path with the correct location of the CustomerCard component

export default function CustomerList() {
  const [customerList, setCustomerList] = useState([]);
  const API_URL = "http://example.com/api/customers"; // Replace with your actual API URL

  useEffect(() => {
    // Fetch customer data using Axios
    axios.get(API_URL).then((response) => {
      setCustomerList(response.data);
    }).catch((error) => {
      console.error("Error fetching customer data:", error);
    });
  }, []);

  return (
    <ChakraProvider>
      <Center py={6}>
        <Wrap spacing={4}>
          {customerList.map((customer) => (
            <WrapItem key={customer.id}>
              <Assign customerData={customer} />
            </WrapItem>
          ))}
        </Wrap>
      </Center>
    </ChakraProvider>
  );
}
