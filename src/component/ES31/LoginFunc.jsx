import { useState } from "react";

export const LoginFunc = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleForm = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((_form) => {
      return { ..._form, [name]: type === "checkbox" ? checked : value };
    });
    console.log(form);
  };

  return (
    <>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={handleForm}
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleForm}
      />
      <input
        type="checkbox"
        name="remember"
        checked={form.remember}
        onChange={handleForm}
      />
    </>
  );
};
