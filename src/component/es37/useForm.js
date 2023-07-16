import { useState } from "react";

export const useForm = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return [values, handleInputChange];
};
