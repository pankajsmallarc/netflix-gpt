
export const checkValidData = (email, password) => {
  const isEmailvalid = /^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!isEmailvalid) return "Email is not valid";
  if (!isPassword) return "Password is not valid";
  return null;
};
