import FormField from "@/components/FormField";
import InputType from "@/components/FormInputs/TextInput";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function RegisterPage() {
  const { control } = useForm();

  return (
    <>
      <p className="mt-4 text-center text-2xl font-bold">Register</p>
      <div className="mt-4 flex flex-col gap-2">
        <p className="text-xl font-bold">Adventure starts here 🚀</p>
        <p>Make your app management easy and fun!</p>
        <FormField
          label="Username"
          placeholder={"Vu Van Tue"}
          name="userName"
          Component={InputType}
          control={control}
        />
        <FormField
          label="Email"
          placeholder={"abc123@gmail.com"}
          name="email"
          Component={InputType}
          control={control}
        />
        <FormField
          label="Password"
          placeholder={"*******"}
          name="password"
          Component={InputType}
          control={control}
          type="password"
        />
        <Button variant="contained"> Sign Up </Button>
        <p>
          {" "}
          Already have an account? <Link to={"/login"}>Sign in instead</Link>
        </p>
      </div>
    </>
  );
}
export default RegisterPage;
