import FormField from "@/components/FormField";
import InputType from "@/components/FormInputs/TextInput";
import { login } from "@/redux/slices/authSlice";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function LoginPage() {
  const { control } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      login({ accessToken: "accessToken", refreshToken: "refreshToken" }),
    );
  }, []);

  return (
    <>
      <p className="mt-4 text-center text-2xl font-bold">Login</p>
      <div className="mt-4 flex flex-col gap-2">
        <p className="text-xl font-bold">Welcome to WeConnect! 👋</p>
        <p>Please sign in to your account and start the adventure</p>
        <FormField
          label="Username"
          placeholder={"Vu Van Tue"}
          name="userName"
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
        <Button variant="contained"> Sign In </Button>
      </div>
    </>
  );
}
export default LoginPage;
