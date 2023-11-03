import { useEffect, useState } from "react";
import { Typography, Grid, Divider, FormHelperText } from "@mui/material";
import { titleStyle } from "./style";
import InputField from "@/components/InputField";
import FormButton from "@/components/FormButton";
import { send } from "emailjs-com";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmiting) {
      send(
        "service_728pi8n",
        "template_n1df23r",
        form,
        "user_L5xYRhbwHzaofEGYMkFhV"
      )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          setForm({
            name: "",
            email: "",
            phone: "",
            city: "",
            message: "",
          });
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    }
  }, [errors, form, isSubmiting]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    if (name === "name" && value.trim() !== "") {
      setErrors({ ...errors, name: "" });
    }
    if (name === "email" && value.trim() !== "") {
      setErrors({ ...errors, email: "" });
    }
    if (name === "phone" && value.trim() !== "") {
      setErrors({ ...errors, phone: "" });
    }
    if (name === "city" && value.trim() !== "") {
      setErrors({ ...errors, city: "" });
    }
  };

  const handleBlur = (event) => {
    const { name, email, phone, city, message } = form;
    // const { name } = event.target;
    if (event.target.name === "name" && !name) {
      setErrors({ ...errors, name: "Please enter your name" });
    }
    if (event.target.name === "email" && !email) {
      setErrors({ ...errors, email: "Please enter your email" });
    }

    if (event.target.name === "phone" && !phone) {
      setErrors({ ...errors, phone: "Please enter your phone" });
    }

    if (event.target.name === "city" && !city) {
      setErrors({ ...errors, city: "Please enter your city" });
    }

    if (event.target.name === "message" && !message) {
      setErrors({ ...errors, message: "Please enter your message" });
    }
  };

  const validate = () => {
    const { name, email, phone, city } = form;
    let formErrors = {};
    if (!name) {
      formErrors.name = "Please enter your name";
    }
    if (!email) {
      formErrors.email = "Please enter your email";
    }
    if (!phone) {
      formErrors.phone = "Please enter your phone";
    }
    if (!city) {
      formErrors.city = "Please enter your city";
    }
    return formErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate());
    setIsSubmiting(true);
  };
  return (
    <Grid
      container
      sx={{
        width: "85%",
        m: "auto",
        mt: {lg: 0, sm: 2, xs: 4},
        mb: 0,

      }}
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography
          sx={{
            ...titleStyle,
            textAlign: { lg: "center", md: "center", sm: "left", xs: "left" },
          }}
        >
          Get In Touch
        </Typography>
        <Divider />
      </Grid>
      <Grid container spacing={2} pt={2} pb={2}>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <InputField
            name="name"
            label="Your Name"
            value={form.name}
            error={errors.name ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormHelperText error>{errors.name}</FormHelperText>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <InputField
            name="email"
            label="Your Email"
            value={form.email}
            error={errors.email ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormHelperText error>{errors.email}</FormHelperText>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <InputField
            name="phone"
            label="Your Mobile"
            value={form.phone}
            error={errors.phone ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormHelperText error>{errors.phone}</FormHelperText>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <InputField
            name="city"
            label="Your City"
            value={form.city}
            error={errors.city ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormHelperText error>{errors.city}</FormHelperText>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <InputField
            name="message"
            label="Message"
            multiLine
            value={form.message}
            error={errors.message ? true : false}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FormHelperText error>{errors.message}</FormHelperText>
        </Grid>
      </Grid>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        mb={2}
        textAlign="center"
        justifyContent="center"
      >
        <FormButton label="Send" onClick={handleSubmit} />
      </Grid>
    </Grid>
  );
};
export default Form;
