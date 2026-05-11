import { TextField } from "@mui/material";

function InputType({ name, onChange, value, placeholder, type }) {
  return (
    <div className="">
      <TextField
        fullWidth
        slotProps={{
          input: {
            className: "h-10 px-3 py-2",
          },
          htmlInput: {
            className: "!p-0",
          },
        }}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
      />
    </div>
  );
}
export default InputType;
