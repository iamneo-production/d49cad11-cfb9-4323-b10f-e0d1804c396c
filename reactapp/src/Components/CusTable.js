import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomCard from "./Cus";

const CardTable = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:2023/api/v1/auth/cust/get");
        setdata(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((entry) => (
        <CustomCard key={entry.id} data={entry} />
      ))}
    </div>
  );
};

export default CardTable;
