import { object, string } from "yup";

export const singUpSchema = object({
  email: string().email().required().label("Email"),
  name: string().required().label("name"),
  password: string().required().label("password"),
});
