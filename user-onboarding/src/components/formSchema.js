import * as yup from "yup";

const formSchema = yup.object().shape({
  firstName: yup.string().trim().required("First Name Required"),
  lastName: yup.string().trim().required("Last Name Required"),
});

export default formSchema;
