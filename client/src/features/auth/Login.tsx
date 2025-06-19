// src/components/LoginForm.tsx
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// 1. Schema for validation
const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log("Submitted:", data);
  };

  return (
 <div className="flex justify-center items-center  h-screen w-full  bg-gradient-to-tr from-indigo-400 via-indigo-300 to-pink-400">
   <h1 className="text-center absolute top-14 text-4xl font-serif font-bold">Dev Connect</h1>
    <div className="w-full max-w-md bg-slate-100 text-slate-800  z-10 p-10 rounded-lg shadow-md">
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-gradient-to-br from-indigo-800 to-pink-400">Login</Button>
      </form>
    </Form>
    </div>
   </div>
  );
};

export default LoginForm;
