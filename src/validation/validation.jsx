import * as Yup from "yup";

const RegistrationSchema = Yup.object().shape({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Password cannot be less than 5 characters")
    .required("This field is required")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 5 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
});

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Password cannot be less than 5 characters")
    .required("This field is required"),
});

const ProfileSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(100, "Too Long!"),
  email: Yup.string().email("Invalid email"),
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  bio: Yup.string().min(2, "The bio is too short!"),
});

export { RegistrationSchema, ProfileSchema, LoginSchema };
