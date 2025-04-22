import validator from "validator";
const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("Name Is Not Valid");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email Is Not Valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please Enter A Strong Password");
  }
};
export { validateSignUpData };
