import { z } from "zod";
import { validateUsername } from "@/lib/utils"

export const signUpSchema = z.object({
  name: z.string().min(3, "Name is required"),
  username: z.string().min(3, "Username is required").refine(validateUsername, {
    message: "Invalid username. eg: johndoe77"
  }),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z
    .string()
    .min(8, "Confirm password must be at least 8 characters long")
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long")
});
