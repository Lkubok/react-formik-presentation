import * as yup from "yup";

const userFormSchema = yup.object().shape({
  userName: yup.string().required(),
  secondName: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().required(),
  passwordRepeat: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  shortInfo: yup.string().optional(),
  checkBox: yup.bool().oneOf([true], "Field must be checked"),
});

export { userFormSchema };
