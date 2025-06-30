import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});
export type LoginSchemaType = z.infer<typeof loginSchema>;

export const signupSchema = z
    .object({
        name: z.string().min(4, "Name must be at least 4 characters"),
    })
    .merge(loginSchema);

export type SignupSchemaType = z.infer<typeof signupSchema>;
