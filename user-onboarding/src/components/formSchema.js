import * as yup from "yup";

const formSchema = yup.object().shape({
  firstName: yup.string().trim().required("First Name Required"),
  lastName: yup.string().trim().required("Last Name Required"),
  email: yup.string().trim().required("Email Required"),
  password: yup
    .string()
    .trim()
    .required("Password Required")
    .min(5, "Password must have at least 5 characters"),
  termsOfService: yup.boolean(),
});

export default formSchema;
