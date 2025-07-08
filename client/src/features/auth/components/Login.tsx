// src/components/LoginForm.tsx
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
import { Link, useNavigate } from "react-router-dom";
import { loginSchema, type LoginSchemaType } from "../types/auth.types";
import { loginUser } from "../services/authService";
import { showErrorToast, showSuccessToast } from "@/lib/toastify";
import { useAuth } from "@/context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    loginUser(data).then((data) => {
      login(data.accessToken);
      navigate('/');
      showSuccessToast(data?.message);
    }).catch((error) => {
      showErrorToast(error, 1000);
    })
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

            <div className="flex flex-col justify-center w-full py-3 gap-4">
              <Button type="submit" className="bg-gradient-to-br from-indigo-800 to-pink-400">Login</Button>
              <p className="text-center text-gray-500">Don't have an account? <Link to={'/signup'} className="text-indigo-600">signup</Link></p>

            </div>      </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
