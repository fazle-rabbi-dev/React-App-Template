import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(3, "Name is required"),
  username: z.string().min(3, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string().min(8, "Confirm password must be at least 8 characters long")
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long")
});

// TODO: link validation
export const submitResourceSchema = z.object({
  title: z.string().min(4, "Title must be at least 4 characters long."),
  keywords: z.string().max(20, "Keywords must be less than 20 characters long."),
  link: z.string().url("Invalid link."),
});
