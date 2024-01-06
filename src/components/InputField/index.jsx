import { TextField } from "@mui/material";

const InputField = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  multiLine,
  error,
}) => {
  return (
    <TextField
      variant="outlined"
      color="info"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      multiline={multiLine}
      rows={4}
      error={error}
      fullWidth
    />
  );
};

export default InputField;
