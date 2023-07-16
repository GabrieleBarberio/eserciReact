import { useForm } from "./useForm";

export const FormHook = () => {
  const [form, setForm] = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", form.username);
    console.log("Password:", form.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={setForm}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={setForm}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
