import axios from "axios";

const ApiInstance = () => {
  const axiosInstance = axios.create({
    baseURL: "",
  });

  return axiosInstance;
};

export default ApiInstance;
