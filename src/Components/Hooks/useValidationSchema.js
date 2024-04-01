import * as Yup from "yup";
import { useMemo } from "react";

function useValidationSchema() {
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        userName: Yup.string().min(3).required("Name is required"),
        userEmail: Yup.string()
          .email("Invalid email")
          .matches(/\.(com|in)$/, "Email must contain '.com' or '.in'")
          .required("Email is required"),
        message: Yup.string().min(10).required("Message is required"),
      }),
    []
  );

  return validationSchema;
}

export default useValidationSchema;
